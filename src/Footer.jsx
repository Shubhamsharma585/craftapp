import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <h3>The Crystal Craft</h3>
          <p>Elevating spaces with timeless crystal decor</p>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
            <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li>Corporate Gifts</li>
              <li>Table Decor</li>
              <li>Wall Decor</li>
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