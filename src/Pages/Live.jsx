import React, { useRef, useEffect } from "react";
import "../style/Live.css";

const Live = () => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const peerRef = useRef();
  const socketRef = useRef();

  useEffect(() => {
    // 1. Get camera
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      localVideoRef.current.srcObject = stream;

      // 2. Connect to signaling server
      socketRef.current = new WebSocket("ws://localhost:8000");

      socketRef.current.onopen = () => {
        console.log("Connected to WebSocket");
        socketRef.current.send(JSON.stringify({ type: "join" }));
      };

      socketRef.current.onmessage = async (message) => {
        const data = JSON.parse(message.data);

        if (data.type === "offer") {
          peerRef.current = new RTCPeerConnection();

          stream.getTracks().forEach(track => {
            peerRef.current.addTrack(track, stream);
          });

          peerRef.current.ontrack = (e) => {
            remoteVideoRef.current.srcObject = e.streams[0];
          };

          await peerRef.current.setRemoteDescription(new RTCSessionDescription(data.offer));
          const answer = await peerRef.current.createAnswer();
          await peerRef.current.setLocalDescription(answer);

          socketRef.current.send(JSON.stringify({ type: "answer", answer }));
        }

        if (data.type === "answer") {
          await peerRef.current.setRemoteDescription(new RTCSessionDescription(data.answer));
        }

        if (data.type === "ready") {
          // Create offer
          peerRef.current = new RTCPeerConnection();

          stream.getTracks().forEach(track => {
            peerRef.current.addTrack(track, stream);
          });

          peerRef.current.ontrack = (e) => {
            remoteVideoRef.current.srcObject = e.streams[0];
          };

          const offer = await peerRef.current.createOffer();
          await peerRef.current.setLocalDescription(offer);

          socketRef.current.send(JSON.stringify({ type: "offer", offer }));
        }
      };
    });
  }, []);

  return (
    <div className="live-chat">
      <h1>Live Video Chat</h1>
      <div className="video-wrapper">
        <video ref={localVideoRef} autoPlay muted className="video" />
        <video ref={remoteVideoRef} autoPlay className="video" />
      </div>
    </div>
  );
};

export default Live;
