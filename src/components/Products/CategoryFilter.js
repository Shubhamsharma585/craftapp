import React from 'react';
import { CATEGORIES } from '../../constants';
import './CategoryFilter.css';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => (
  <div className="categories" role="group" aria-label="Product category filters">
    {CATEGORIES.map(category => (
      <button 
        key={category}
        className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
        onClick={() => setSelectedCategory(category)}
        aria-pressed={selectedCategory === category}
        aria-label={`Filter by ${category} category`}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter; 