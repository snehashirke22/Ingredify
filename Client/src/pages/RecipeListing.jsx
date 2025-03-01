import React, { useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { FaClock, FaUsers } from "react-icons/fa";
import "../styles/RecipeListing.css";

const RecipeListing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("query") || "All ";

  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(false);

  // Function to fetch recipes
  const fetchRecipes = async (query = "", pageNum = 1) => {
    try {
      let url = `https://ingredify-server.onrender.com/api/recipes?page=${pageNum}`;
      if (query) url += `&query=${query}`;

      const response = await axios.get(url);
      setRecipes(response.data.recipes);
      setTotalPages(response.data.totalPages);
      setError(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError(true);
    }
  };

  // Fetch recipes on page load or category change
  useEffect(() => {
    fetchRecipes(category !== "All Recipes" ? category : "", page);
  }, [category, page]);

  return (
    <div className="recipe-list-container">
      <div className="searchbar-section">
        <div className="hero-background"></div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for recipes..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              fetchRecipes(e.target.value, 1);
            }}
          />
          <AiOutlineSearch className="search-icon" />
        </div>
      </div>

      {/* Category Title */}
      <h2 className="category-title">
        {category.charAt(0).toUpperCase() + category.slice(1)} Recipes
      </h2>

      <div className="recipes-flex">
        {error ? (
          <p className="error-message">Sorry! No recipes to show here.</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card" onClick={() => navigate(`/recipe/${recipe.id}`)}>
              <img
                src={recipe.image || "https://source.unsplash.com/400x300/?food,dish"}
                alt={recipe.title}
                className="recipe-image"
              />
              <div className="recipe-content">
                <h3 className="recipe-title">{recipe.title}</h3>
                <div className="recipe-info">
                  <span><FaClock size={16} /> {recipe.readyInMinutes} min</span>
                  <span><FaUsers size={16} /> {recipe.servings} servings</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="page-btn prev" disabled={page === 1} onClick={() => setPage(page - 1)}>
          ← Previous
        </button>
        <span className="page-info"> Page {page} of {totalPages} </span>
        <button className="page-btn next" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default RecipeListing;
