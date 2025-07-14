import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>FilmCamera</h2>
        <p>Capturing emotions through the lens.</p>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FilmCamera. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
