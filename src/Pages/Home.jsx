import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-left">
        <h1 className="hero-title">Hi! I'm Bando,<br />Freelance Photographer</h1>
        <p className="hero-description">
          Based in Watamu, I collaborate to create emotional photographs and love to tell stories with creativity and passion.
        </p>

        <Link to="/skills" className="skills-btn">
          View My Skills
        </Link>
      </div>

      <div className="hero-right">
        <img src="https://raw.githubusercontent.com/bando254/benz/63931257ba59be355b6ec1a5311247ba81907bcb/IMG-20250509-WA0003%20(1).jpg" alt="Bando holding camera" />
      </div>
    </div>
  );
};

export default Home;
