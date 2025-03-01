import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(""); 

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://ingredify-server.onrender.com/api/recipe-details?id=${id}`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        setError("No details to show!"); 
      }
    };
    fetchRecipeDetails();
  }, [id]);

  if (error) return <p className="error-message">{error}</p>; 
  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1 className="recipe-details-title">{recipe.title}</h1>
      <img
        className="recipe-details-image"
        src={recipe.image}
        alt={recipe.title}
      />
      <p
        className="recipe-details-summary"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      ></p>

      <h2 className="recipe-details-section">Ingredients</h2>
      <ul className="recipe-details-ingredients">
        {recipe.ingredients.length > 0 ? (
          recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))
        ) : (
          <p>No ingredients available.</p>
        )}
      </ul>

      <h2 className="recipe-details-section">Instructions</h2>
      <div
        className="recipe-details-instructions"
        dangerouslySetInnerHTML={{ __html: recipe.instructions }}
      ></div>
    </div>
  );
};

export default RecipeDetails;
