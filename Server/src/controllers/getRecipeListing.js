import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const getRecipeListing = async (req, res) => {
  try {
    const { query, category, page = 1 } = req.query;
    const recipesPerPage = 20;
    const totalRecipes = 100;

    let url = "https://api.spoonacular.com/recipes/complexSearch";
    let params = {
      apiKey: process.env.SPOONACULAR_API_KEY,
      number: totalRecipes, 
      addRecipeInformation: true,
    };

    if (query) {
      params.query = query; // Search recipes based on user search input or category 
    } else {
      params.sort = "popularity"; // Default: Show popular recipes
    }

    const response = await axios.get(url, { params });

    // Paginate results
    const startIndex = (page - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    const paginatedRecipes = response.data.results.slice(startIndex, endIndex);

    res.json({
      recipes: paginatedRecipes,
      currentPage: page,
      totalPages: Math.ceil(totalRecipes / recipesPerPage),
    });
  } catch (error) {
    console.error("Error fetching recipes:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};
