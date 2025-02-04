import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Crystal Craft</h1>
          <p>Discover our handcrafted resin masterpieces that blend art with functionality. Each piece tells a unique story through mesmerizing colors and organic patterns.</p>
        </div>
        
      </div>
    </header>
  );
};

export default Hero; 