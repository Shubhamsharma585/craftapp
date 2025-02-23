import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Crystal Craft</h1>
          <p>Discover our handcrafted resin masterpieces that blend art with functionality. Each piece tells a unique story through mesmerizing colors and organic patterns.</p>
          <div className="hero-cta">
            <button className="cta-button primary" onClick={handleShopNow}>
              Shop Now
            </button>
            <button className="cta-button secondary" onClick={handleContactUs}>
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Visit Our Studio</h4>
              <p>Suraj Vihar, Sardarshahar, Rajasthan</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <h4>Call Us</h4>
              <p>+91 7877270283</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email Us</h4>
              <p>info@crystalcraft.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero; 