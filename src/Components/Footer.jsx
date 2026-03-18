import React from "react";
import "./Footer.css";
import logo from "../assets/l.png";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* ROW 1: 4 Columns */}
        <div className="footer-col footer-logo-section">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <p>Let’s connect and power the future of electronics and telecommunications together.</p>
        </div>

        <div className="footer-col footer-contact-section">
          <h4 className="company-name">Contact Us</h4>
          <p>Orbit Electronic & Telecommunication WLL</p>
          <p>The Commercial Avenue, Al Sayer 2, Bldg. 09</p>
          <p>Office No.C103, P.O Box 7994 Doha Qatar</p>
          <p>Mobile / WhatsApp: +974 3119 1887</p>
          <p>  Fax: +974 4005 2200</p>
          <p>info@orbitqa.com  I   sales@orbitqa.com</p>
        </div>

        <div className="footer-col Menu">
          <h4 className="company-name">Quick Links</h4>
          <button onClick={() => navigate("/Home")}>Home</button>
          <button onClick={() => navigate("/about")}>About Us</button>
          <button onClick={() => navigate("/Services")}>Services</button>
          <button onClick={() => navigate("/Contact")}>Contact</button>
        </div>

        <div className="footer-col social-icons">
          <h4 className="company-name">Socials</h4>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>

        {/* ROW 2: Single Column */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Orbit Electronics & Telecommunications. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
