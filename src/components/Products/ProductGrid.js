import React, { useState } from 'react';
import { PRODUCTS } from '../../constants';
import './ProductGrid.css';
import CategoryFilter from './CategoryFilter';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(item => item.category === selectedCategory);

  return (
    <div>
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    <div className="products-grid">
      {filteredItems.map(item => (
        <div key={item.id} className="product-card">
          <div className="product-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="product-info">
            <div className="product-id">Product ID: {item.id}</div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="product-price">
              <span className="currency">₹</span>
              <span className="amount">{typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</span>
            </div>
            <div className="product-category">{item.category}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductGrid; 