
import express from "express";
import { getPopularRecipes } from "../controllers/getPopularRecipes.js";
import { generateRecipe } from "../controllers/generateRecipe.js";
//import { generateMealPlan } from "../controllers/generateMealPlan.js";
import { getRecipeListing } from "../controllers/getRecipeListing.js";
import { getRecipeDetails } from "../controllers/getRecipeDetails.js";

const router = express.Router();

// Route for fetching popular recipes (Home Page)
router.get("/", getPopularRecipes);

// Route for generating a recipe using AI (Recipe Generator Page)
router.post("/generate-recipe", generateRecipe);

// Route for listing recipes (Recipe Listing Page)
router.get("/recipes", getRecipeListing);

// Route for showing details of recipe
router.get("/recipe-details", getRecipeDetails);

export default router;
