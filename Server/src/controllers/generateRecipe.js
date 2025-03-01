import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const schema = {
  description: "Generated recipe details",
  type: SchemaType.OBJECT,
  properties: {
    title: { type: SchemaType.STRING, description: "Recipe name" },
    image: { type: SchemaType.STRING, description: "URL of the recipe image" },
    cookingTime: { type: SchemaType.STRING, description: "Cooking duration" },
    portions: { type: SchemaType.STRING, description: "Number of servings" },
    ingredients: {
      type: SchemaType.ARRAY,
      items: { type: SchemaType.STRING },
      description: "List of ingredients",
    },
    instructions: {
      type: SchemaType.ARRAY,
      items: { type: SchemaType.STRING },
      description: "Step-by-step cooking instructions",
    },
  },
  required: ["title", "image", "cookingTime", "portions", "ingredients", "instructions"],
};

export const generateRecipe = async (req, res) => {
  try {
    let { ingredients, mealType, cuisineType, dietaryRequirements, cookingTime } = req.body;

    if (!Array.isArray(ingredients)) ingredients = [ingredients];
    if (!Array.isArray(dietaryRequirements)) dietaryRequirements = [dietaryRequirements];

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

const prompt = `
Generate a unique and delicious ${cuisineType} ${mealType} recipe.

**Ingredients:** ${ingredients.join(", ") || "Not specified"}
**Dietary Preferences:** ${dietaryRequirements.join(", ") || "None"}
**Cooking Time:** ${cookingTime || "Not specified"}

**Recipe Format (JSON):**

\`\`\`json
{
  "title": "Recipe Title (e.g., Spicy Indian Chicken Curry)",
  "image": "URL of a high-quality, realistic food image",
  "cookingTime": "Estimated cooking time (e.g., 45 minutes)",
  "portions": "Number of servings (e.g., 4)",
  "ingredients": [
    "List of ingredients (e.g., 1 lb boneless chicken, 1 onion, 2 cloves garlic)",
    "Use specific measurements where applicable (e.g., 1 tsp cumin)",
    "Do not include preparation instructions within the ingredients list."
  ],
  "instructions": [
    "Step-by-step cooking instructions (e.g., Marinate chicken...)",
    "Be detailed and clear in each step.",
  ]
}
\`\`\`

**Instructions for Gemini:**

1.  **Strictly adhere to the JSON format provided above.**  Do not include any text outside the JSON block.  The entire response should be valid JSON that can be directly parsed.
2.  **Cuisine:** The recipe MUST be ${cuisineType}.  For example, if ${cuisineType} is "Indian", the recipe must be authentically Indian.
3.  **Meal Type:** The recipe should be suitable for ${mealType} (e.g., "dinner," "lunch," "breakfast").
4.  **Ingredients:** Use the provided ingredients as a *starting point*.  Feel free to add other complementary ingredients as needed to create a complete and delicious recipe.  If no ingredients are provided, create a recipe using common ingredients for the specified cuisine and meal type. If ingredients are specified, prioritize them.
5.  **Dietary Preferences:**  Consider the dietary requirements. If none are specified, create a standard recipe.
6.  **Cooking Time:**  If a cooking time is provided, aim to stay within that timeframe.  If not, provide a reasonable estimate.
7.  **Image:** Provide a URL to a high-quality, realistic image of the dish.  If you cannot find a suitable image, you may use a placeholder like "IMAGE_NOT_AVAILABLE".  Do not make up URLs.
8.  **Title:** Create a creative and descriptive title for the recipe.
9.  **Instructions:** Provide clear, concise, and easy-to-follow cooking instructions.
10. **Do not include any introductory or concluding text.**  Only return the JSON.
11. **Do not explain the recipe.**  Just provide the JSON.
`;

    const result = await model.generateContent(prompt);

    let generatedRecipe;
    try {
      generatedRecipe = JSON.parse(result.response.text());
    } catch (jsonError) {
      console.error("Error parsing JSON:", jsonError);
      return res.status(500).json({ error: "Invalid JSON response from Gemini" });
    }

    // **Fallback Image Handling**
    if (!generatedRecipe.image || !isValidUrl(generatedRecipe.image)) {
      generatedRecipe.image = `https://source.unsplash.com/400x300/?${mealType},food`;
    }

    res.json(generatedRecipe);
  } catch (error) {
    console.error("Error generating recipe:", error);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
};

// **Helper function to validate URLs**
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};
