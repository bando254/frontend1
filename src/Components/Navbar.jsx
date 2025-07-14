import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FilmCamera</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/book">Book</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/live">Live</Link></li>
        <li><Link to="/skills">Skills</Link></li> {/* ✅ Added this */}
      </ul>
    </nav>
  );
};

export default Navbar;
