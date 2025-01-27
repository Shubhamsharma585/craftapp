import React, { useState, useEffect } from 'react';
import './FeaturedCarousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FeaturedCarousel = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Generate a random time less than 24 hours
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);
    
    // Format the time as HH:MM:SS
    const formatTime = (h, m, s) => {
      return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    setTimeLeft(formatTime(randomHours, randomMinutes, randomSeconds));

    // Optional: Update the timer every second (if needed)
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const [h, m, s] = prevTime.split(':').map(Number);
        if (s > 0) return formatTime(h, m, s - 1);
        if (m > 0) return formatTime(h, m - 1, 59);
        if (h > 0) return formatTime(h - 1, 59, 59);
        clearInterval(timer);
        return '00:00:00'; // Timer ends
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="featured-carousel">
      <div className="featured-content">
        <div className="featured-badge">
          <span>Limited Time Deal</span>
        </div>
        <div className="featured-image">
          <img 
            src="/WhatsApp Image 2025-01-25 at 7.50.21 PM (2).jpeg" 
            alt="Crystal Candle Holder" 
          />
        </div>
        <div className="featured-info">
          <h2>Crystal Candle Holder</h2>
          <div className="price-tag">
            <span className="original-price">₹850</span>
            <span className="sale-price">₹299</span>
            <span className="discount-badge">-65% OFF</span>
          </div>
          <div className="bulk-pricing">
            <p>Bulk Order Pricing:</p>
            <ul>
              <li>10+ pieces: <strong>₹280/piece</strong></li>
              <li>25+ pieces: <strong>₹250/piece</strong></li>
              <li>50+ pieces: <strong>₹220/piece</strong></li>
            </ul>
          </div>
          <p className="deal-timer">Offer ends in: {timeLeft}</p>
          <div className="contact-section-desktop" style={{border: '1px solid green', height: 'auto'}}>
            <div className="contact-header">
              <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
              <h3>Contact Us for Instant Support</h3>
            </div>
            {/* <div className="contact-options">
              <div 
                className="contact-card"
                onClick={() => window.open(`https://wa.me/917877270283?text=Hi! I'm interested in the Crystal Candle Holder.`, '_blank')}
              >
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                <div className="contact-info">
                  <h4 className="contact-title">Sales Enquiry</h4>
                  <p className="contact-subtitle">Get instant quote & details</p>
                  <div className="contact-availability">
                    <span className="status-dot"></span>
                    Usually replies instantly
                  </div>
                </div>
              </div>
              <div 
                className="contact-card"
                onClick={() => window.open(`https://wa.me/917877270283?text=Hi! I'd like to know about bulk orders for Crystal Candle Holders.`, '_blank')}
              >
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="contact-info">
                  <h4 className="contact-title">Bulk Orders</h4>
                  <p className="contact-subtitle">Special pricing & support</p>
                  <div className="contact-availability">
                    <span className="status-dot"></span>
                    Available 24/7
                  </div>
                </div>
              </div>
            </div> */}
            <button 
              className="whatsapp-button"
              onClick={() => window.open(`https://wa.me/917877270283`, '_blank')}
              aria-label="Contact us on WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>Message us on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel; 