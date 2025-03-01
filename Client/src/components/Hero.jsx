import React from 'react';
import '../styles/Hero.css'
import { IoArrowForward } from "react-icons/io5";
import hero from '../assets/hero.png'
import { BsStars } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
      <div className="hero-tag">
          <BsStars  className="tag-icon" />
          <span>AI-Powered Cooking Made Easy!</span>
        </div>
        <h1>Turn Your Ingredients into <span style={{color: '#0d492d'}}>Delicious Recipes!</span></h1>
        <p>Discover personalized recipes based on ingredients you already have. Turn everyday ingredients into extraordinary meals with our AI-powered recipe generator.</p>
        <button className="generate-button" onClick={() => navigate("/recipe-generator")}>
          Generate Recipes
          <IoArrowForward className="button-icon" />
        </button>
      </div>
      <div className="hero-image">
        <img 
          src={hero}
          alt="Chef cooking in a professional kitchen"
        />
      </div>
    </section>
  );
};

export default Hero;