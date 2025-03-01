import React from "react";
import "../styles/Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-heading">Subscribe To <span className="highlight">Our Newsletter</span></h2>
      <p className="newsletter-text">Stay Inspired in the Kitchen! 🍳 Get exclusive cooking tips, trending recipes, and personalized meal plans straight to your inbox. Subscribe now and elevate your home cooking!</p>
      <div className="newsletter-input-container">
        <input type="email" placeholder="Enter Email Address" className="newsletter-input" />
        <button className="newsletter-button">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
