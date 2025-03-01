import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeGenerator from "./pages/RecipeGenerator";
import RecipeListing from "./pages/RecipeListing";
import RecipeDetails from "./pages/RecipeDetails";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-generator" element={<RecipeGenerator />} />
        <Route path="/recipes" element={<RecipeListing />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
