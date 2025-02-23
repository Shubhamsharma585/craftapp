import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <h3>The Crystal Craft</h3>
          <p>Elevating spaces with timeless crystal decor</p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/cystalcraft.in?igsh=cm1uNWw2MGw1d2Vl&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
                alt="Instagram"
                className="social-icon"
              />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit' }}>About</Link></li>
              <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit' }}>Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/products?category=table-decor" style={{ color: 'inherit', textDecoration: 'inherit' }}>Table Decor</Link></li>
              <li><Link to="/products?category=wall-decor" style={{ color: 'inherit', textDecoration: 'inherit' }}>Wall Decor</Link></li>
              <li><Link to="/products?category=gods-and-goddesses" style={{ color: 'inherit', textDecoration: 'inherit' }}>Gods & Goddesses</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: contact@crystalcraft.in</li>
              <li>Phone: +91 7877270283</li>
              <li>Address: The Crystal Craft, Suraj Vihar, Sardarshahar, Rajasthan INDIA 331403</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 The Crystal Craft. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer