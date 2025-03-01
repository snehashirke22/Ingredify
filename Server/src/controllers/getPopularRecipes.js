import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const getPopularRecipes = async (req, res) => {
  try {
    const response = await axios.get("https://api.spoonacular.com/recipes/random", {
      params: {
        apiKey: process.env.SPOONACULAR_API_KEY,
        number: 20,
      },
    });

    console.log("Total recipes received:", response.data.recipes.length);
    
    const popularRecipes = response.data.recipes.slice(0, 8); 
    res.json(popularRecipes);
  } catch (error) {
    console.error("Error fetching popular recipes:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch popular recipes" });
  }
};
