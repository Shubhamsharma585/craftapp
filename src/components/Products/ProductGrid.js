import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../constants';
import './ProductGrid.css';
import CategoryFilter from './CategoryFilter';
import { StarFill, StarHalf, Star } from 'react-bootstrap-icons';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredItems = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(item => item.category === selectedCategory);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarFill key={`star-${i}`} className="star-filled" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="star-filled" />);
    }
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="star-empty" />);
    }
    return stars;
  };

  return (
    <div>
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="products-grid">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className="product-card"
            onClick={() => handleProductClick(item.id)}
          >
            <div className="product-image">
              <img src={item.image} alt={item.name} />
              {item.stock < 5 && <span className="low-stock">Low Stock</span>}
            </div>
            <div className="product-info">
              <h3>{item.name}</h3>
              <div className="product-rating">
                {renderRatingStars(item.rating)}
                <span className="review-count">({item.reviews?.length || 0} reviews)</span>
              </div>
              <p className="product-description">{item.description}</p>
              <div className="product-price">
                <span className="currency">₹</span>
                <span className="amount">{typeof item.price === 'number' ? item.price.toLocaleString('en-IN') : item.price}</span>
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