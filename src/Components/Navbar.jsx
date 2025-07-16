import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">FilmCamera</div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
        <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
        <li><Link to="/book" onClick={toggleMenu}>Book</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/live" onClick={toggleMenu}>Live</Link></li>
        <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
