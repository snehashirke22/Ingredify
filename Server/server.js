import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recipeRoutes from "./src/routes/recipeRoutes.js";

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Use the recipe routes at the base URL: /api/
app.use("/api/", recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
