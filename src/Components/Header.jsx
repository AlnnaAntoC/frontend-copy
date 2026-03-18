// src/Components/Header.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="top-header">
      <div className="header-left">
        <a href="tel:+97431191887" className="contact-link" title="+974 3119 1887">
          <FaPhone />
          
        </a>
        <a href="mailto:info@orbitqa.com" className="contact-link" title="info@orbitqa.com">
          <FaEnvelope />
         
        </a>
        <a href="mailto:sales@orbitqa.com" className="contact-link" title="sales@orbitqa.com">
          <FaEnvelope />
          
        </a>
        <a href="https://goo.gl/maps/xxxx" className="contact-link" target="_blank" rel="noopener noreferrer" title="Doha, Qatar">
          <FaMapMarkerAlt />
          
        </a>
      </div>

      <div className="header-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/97431191887" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Header;