import React, { useRef, useEffect, useState } from "react";
import "../style/live.css";

const Live = () => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const peerRef = useRef();
  const socketRef = useRef();
  const [cameraStatus, setCameraStatus] = useState("Checking camera...");

  useEffect(() => {
    const getMedia = async () => {
      try {
        console.log("Attempting to access camera...");
        setCameraStatus("Accessing camera...");

        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: "user"
          },
          audio: true
        });

        console.log("Successfully got media stream:", stream);
        setCameraStatus("Camera active");

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;

          localVideoRef.current.onloadedmetadata = () => {
            console.log("Video metadata loaded");
          };

          localVideoRef.current.onplay = () => {
            console.log("Video is playing");
            setCameraStatus("Camera working");
          };
        }

        setupWebSocket(stream);
      } catch (err) {
        console.error("❌ Camera/microphone access failed:", err);
        setCameraStatus(`Error: ${err.message}`);

        if (err.name === "NotFoundError" || err.name === "DevicesNotFoundError") {
          console.error("Camera not found.");
        } else if (err.name === "NotReadableError") {
          console.error("Camera is already in use.");
        } else if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
          console.error("Permissions denied.");
        } else if (err.name === "OverconstrainedError") {
          console.error("Constraints not satisfied.");
        }
      }
    };

    const setupWebSocket = (stream) => {
      // ✅ Use secure WebSocket for ngrok
      socketRef.current = new WebSocket("wss://6ee3030bb118.ngrok-free.app");

      socketRef.current.onopen = () => {
        console.log("✅ Connected to WebSocket");
        socketRef.current.send(JSON.stringify({ type: "join" }));
      };

      socketRef.current.onclose = () => {
        console.log("WebSocket connection closed");
      };

      socketRef.current.onerror = (err) => {
        console.error("WebSocket error:", err);
      };

      socketRef.current.onmessage = async (message) => {
        try {
          const data = JSON.parse(message.data);
          console.log("WebSocket message received:", data.type);

          if (data.type === "offer") {
            await handleOffer(stream, data);
          } else if (data.type === "answer") {
            await handleAnswer(data);
          } else if (data.type === "ready") {
            await initiateCall(stream);
          }
        } catch (err) {
          console.error("Error handling WebSocket message:", err);
        }
      };
    };

    const handleOffer = async (stream, data) => {
      peerRef.current = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
      });

      peerRef.current.onicecandidateerror = (err) => {
        console.error("ICE candidate error:", err);
      };

      peerRef.current.onconnectionstatechange = () => {
        console.log("Peer connection state:", peerRef.current.connectionState);
      };

      stream.getTracks().forEach(track => {
        peerRef.current.addTrack(track, stream);
      });

      peerRef.current.ontrack = (e) => {
        if (remoteVideoRef.current && e.streams && e.streams[0]) {
          remoteVideoRef.current.srcObject = e.streams[0];
        }
      };

      await peerRef.current.setRemoteDescription(new RTCSessionDescription(data.offer));
      const answer = await peerRef.current.createAnswer();
      await peerRef.current.setLocalDescription(answer);

      socketRef.current.send(JSON.stringify({ type: "answer", answer }));
    };

    const handleAnswer = async (data) => {
      if (!peerRef.current) {
        console.error("No peer connection exists for answer");
        return;
      }
      await peerRef.current.setRemoteDescription(new RTCSessionDescription(data.answer));
    };

    const initiateCall = async (stream) => {
      peerRef.current = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
      });

      stream.getTracks().forEach(track => {
        peerRef.current.addTrack(track, stream);
      });

      peerRef.current.ontrack = (e) => {
        if (remoteVideoRef.current && e.streams && e.streams[0]) {
          remoteVideoRef.current.srcObject = e.streams[0];
        }
      };

      const offer = await peerRef.current.createOffer();
      await peerRef.current.setLocalDescription(offer);

      socketRef.current.send(JSON.stringify({ type: "offer", offer }));
    };

    getMedia();

    return () => {
      if (peerRef.current) peerRef.current.close();
      if (socketRef.current) socketRef.current.close();
      if (localVideoRef.current && localVideoRef.current.srcObject) {
        localVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="live-chat">
      <h1>Live Video Chat</h1>
      <div className="status">{cameraStatus}</div>
      <div className="video-wrapper">
        <video
          ref={localVideoRef}
          autoPlay
          muted
          playsInline
          className="video"
        />
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          className="video"
        />
      </div>
    </div>
  );
};

export default Live;
