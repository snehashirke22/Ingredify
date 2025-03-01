import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const getRecipeDetails = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Recipe ID is required" });
    }

    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information`,
      {
        params: { apiKey: process.env.SPOONACULAR_API_KEY },
      }
    );

    const recipeDetails = response.data;

    // If the API response doesn't contain required details, return an error
    if (!recipeDetails || !recipeDetails.title) {
      return res.status(404).json({ error: "No recipe details found" });
    }

    res.json({
      id: recipeDetails.id,
      title: recipeDetails.title,
      image: recipeDetails.image,
      servings: recipeDetails.servings,
      readyInMinutes: recipeDetails.readyInMinutes,
      ingredients: recipeDetails.extendedIngredients
        ? recipeDetails.extendedIngredients.map((ing) => ing.original)
        : [],
      instructions: recipeDetails.instructions || "No instructions provided.",
      summary: recipeDetails.summary || "No summary available.",
    });
  } catch (error) {
    console.error(
      "Error fetching recipe details:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to fetch recipe details" });
  }
};
