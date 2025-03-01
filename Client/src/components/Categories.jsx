import React from 'react';
import '../styles/Categories.css';
import {useNavigate} from 'react-router-dom';

const Categories = () => {

  const navigate = useNavigate();
  
  const categories = [
    {
      cname: "breakfast",
      title: "Breakfast Delights",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwYnJlYWtmYXN0fGVufDB8fDB8fHww",
    },
    {
    cname: "lunch",
      title: "Lunch & Dinner",
      image: "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwdGhhbGl8ZW58MHx8MHx8fDA%3D",
    },
    {
    cname: "snack",
      title: "Snacks",
      image: "https://images.unsplash.com/photo-1496930666207-e76e8253a950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNuYWNrcyUyMGNoaXBzfGVufDB8fDB8fHww",
    },
    {
      cname: "dessert",
      title: "Sweets & Dessert",
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc3NlcnRzfGVufDB8fDB8fHww",
    },
    {
      cname: "beverage",
      title: "Chill Drinks",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fHww",
    }
  ];

  const handleCategoryClick = (cname) => {
    navigate(`/recipes?query=${cname}`);
  };

  return (
    <div className="categories-container">
      <div className="categories-header">
        <h2 className="categories-subtitle">Our Categories</h2>
        <div className="categories-title">
          Explore By <span className="highlight">Category</span>
        </div>
      </div>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item" onClick={()=> handleCategoryClick(category.cname)}>
            <div className="category-image-container">
              <img
                src={category.image}
                alt={category.title}
                className="category-image"
              />
            </div>
            <h3 className="category-title">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;