import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/PopularRecipes.css";
import { useNavigate } from "react-router-dom";
import { FaClock, FaUsers } from "react-icons/fa";

const PopularRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false); // State to track API errors
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/");
        setRecipes(response.data);
        setError(false); // Reset error if request is successful
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError(true); // Set error state if API request fails
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="popular-recipes-container">
      <div className="header-row">
        <h2 className="section-title">
          Popular <span style={{ color: "#0d492d" }}>Recipes</span>
        </h2>
        <button className="view-all-button" onClick={() => navigate("/recipes")}>
          View All Recipes
        </button>
      </div>

      <div className="recipes-scroll-container">
        {error ? (
          <p className="error-message">Sorry! No recipes to show here.</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card" onClick={()=> navigate(`/recipe/${recipe.id}`)}>
              <img
                src={recipe.image || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80"}
                alt={recipe.title}
                className="recipe-image"
              />
              <div className="recipe-content">
                <h3 className="recipe-title">{recipe.title}</h3>
                <div className="recipe-info">
                  <span>
                    <FaClock size={16} /> {recipe.readyInMinutes} min
                  </span>
                  <span>
                    <FaUsers size={16} /> {recipe.servings} servings
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopularRecipes;
