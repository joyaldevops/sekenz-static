import React from 'react';
import { FaFacebookF, FaInstagram, FaBehance, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../Assets/com-logo.jpg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img className="footer-logo" src={Logo} alt="Sekenz Group Logo" />
          <p className="footer-description">
            We are a bunch of young talented dreamers, who love creating work that is provocative, ignites meaning and creates awareness. Our team is a blend of creative ideas, digital proficiency and technological expertise.
          </p>
          <div className="footer-social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaBehance />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-list">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Software Development</li>
            <li>Digital Marketing</li>
            <li>E-Commerce Development</li>
            <li>UI/UX Designing</li>
            <li>Study Abroad</li>
            <li>Abroad Recruitment</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Company</h4>
          <ul className="footer-list">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024 © All rights Reserved. SEKENZ GROUP</p>
      </div>
    </footer>
  );
};

export default Footer;
