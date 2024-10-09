import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the updated CSS file

const Navbar = ({ showHeader = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {showHeader && (
          <div className="navbar-brand">
            <h1>SERIAL MEDIA</h1>
          </div>
        )}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleMenu}>
              MENU
            </button>
            <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
              <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/careers" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Careers</Link>
              <Link to="/services" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
