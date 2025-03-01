import React from "react";
import '../styles/Footer.css';
import logo from '../assets/logo2.png'
import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="brand">
            <span className="logo"><img src={logo} alt="logo" className="footer-logo-icon" /></span> Ingredify
          </h2>
          <p>Discover new flavors, master cooking techniques, and enjoy personalized meal plans tailored just for you.</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaPinterestP />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-section">
          <h3>Other Links</h3>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Career</li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📞 +0123-456-789</p>
          <p>📧 enquiry@ingredify.com</p>
          <p>📍 3025, Shoppers Road, Sillicon Valley</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 <span className="highlight">Ingredify Website</span>. All Rights Reserved.</p>
        <div className="powered-by">
          <p>Powered by Spoonacular and Gemini API</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
