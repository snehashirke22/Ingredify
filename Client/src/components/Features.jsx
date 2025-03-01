import React from 'react';
import '../styles/Features.css';
import { BsStars } from "react-icons/bs";

const Features = () => {
    return (
        <>
            {/* Features Section */}
            <section className="feature-section">
            <div className="features-title">
          Our <span className="highlight">Features</span>
        </div>
                <div className="container">
                    <div className="flex-container">
                        {/* Left Side - Image */}
                        <div className="image-container">
                            <img
                                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80"
                                alt="Cooking ingredients"
                                className="feature-image"
                            />
                            <div className="badge">Cooking made easy!</div>
                        </div>

                        {/* Right Side - Features */}
                        <div className="content-container">
                            <div className="features-list">
                                <div className="feature-item">
                                    <div className="icon-container">
                                        <BsStars className="icon" />
                                    </div>
                                    <div className="feature-content">
                                        <h3> AI-Powered Recipe Generation</h3>
                                        <p>
                                        Generate unique recipes instantly by simply entering ingredients, cuisine type, meal type, and dietary preferences.
                                        </p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="icon-container">
                                        <BsStars className="icon" />
                                    </div>
                                    <div className="feature-content">
                                        <h3>Explore & Filter Thousands of Recipes</h3>
                                        <p>
                                        Explore and filter thousands of verified recipes effortlessly. Find your next favorite dish with smart search, dietary filters, cuisine types, and meal categories for a perfect match.
                                        </p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="icon-container">
                                        <BsStars className="icon" />
                                    </div>
                                    <div className="feature-content">
                                        <h3>Smart & Easy Meal Planning</h3>
                                        <p>Plan smart meals with AI-generated recipes, dietary preferences, and calculate calories for healthy cooking.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Features;
