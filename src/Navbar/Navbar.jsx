import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logonew from '../Assets/logonew.jpg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={Logonew} alt="Logo" className="logo" />
      </div>
      <button className="toggle-button" onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
        <li><Link to="/services" onClick={toggleNavbar}>Services</Link></li>
        <li><Link to="/career" onClick={toggleNavbar}>Career</Link></li>
        <li><Link to="/about" onClick={toggleNavbar}>About Us</Link></li>
        <li><Link to="/contact" onClick={toggleNavbar}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
