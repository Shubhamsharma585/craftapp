import React from 'react';
import { redirect } from 'react-router';
import './Hero.css';

const Hero = () => {

  const handleRedirect = (path) => {
    redirect(path);
  };

  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>The Crystal Craft</h1>
        <p>Transform your space with our exquisite crystal decorative pieces</p>
        <div className="hero-cta">
          <button 
            className="cta-button primary" 
            onClick={() => handleRedirect('/products')}
          >
            Explore Collection
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => handleRedirect('/about')}
          >
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero; 