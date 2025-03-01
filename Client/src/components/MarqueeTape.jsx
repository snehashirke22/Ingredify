import React from "react";
import { FaLeaf } from "react-icons/fa"; 
import '../styles/MarqueeTape.css';

const MarqueeTape = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span>Tell Us Ingredients</span> <FaLeaf className="leaf-icon" />
        <span>Choose Meal Type</span> <FaLeaf className="leaf-icon" />
        <span>Get Recipes Instantly</span> <FaLeaf className="leaf-icon" />
        <span>Cook & Enjoy</span>
      </div>
    </div>
  );
};

export default MarqueeTape;
