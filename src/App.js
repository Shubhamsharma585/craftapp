import React, { useState } from 'react';
import './App.css';

// Sample data for decorative items by category
const categories = [
  'All',
  'Corporate Gifts',
  'Table Decor',
  'Wall Decor',
  'Living Room Decor',
  'Office Decor',
  'Other Decor'
];

const decorativeItems = [
  {
    id: 1,
    name: 'Crystal Business Card Holder',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80',
    description: 'Elegant crystal card holder for office desks',
    category: 'Corporate Gifts'
  },
  {
    id: 2,
    name: 'Crystal Wall Mirror',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80',
    description: 'Modern wall mirror with crystal-embedded frame',
    category: 'Wall Decor'
  },
  {
    id: 3,
    name: 'Crystal Table Centerpiece',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80',
    description: 'Stunning crystal centerpiece for dining tables',
    category: 'Table Decor'
  },
  {
    id: 4,
    name: 'Crystal Flower Vase',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80',
    description: 'Handcrafted crystal vase for living spaces',
    category: 'Living Room Decor'
  },
  {
    id: 5,
    name: 'Crystal Desk Clock',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?auto=format&fit=crop&q=80',
    description: 'Premium crystal desk clock for office decoration',
    category: 'Office Decor'
  },
  {
    id: 6,
    name: 'Crystal Trophy',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1531498681050-ae4a7c0b4f1d?auto=format&fit=crop&q=80',
    description: 'Customizable crystal trophy for corporate awards',
    category: 'Corporate Gifts'
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? decorativeItems 
    : decorativeItems.filter(item => item.category === selectedCategory);

  const renderContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <section className="about-section">
            <h2>About Us</h2>
            <div className="about-content">
              <p>Welcome to The Crystal Craft, where elegance meets artistry. We specialize in creating exquisite crystal decorative pieces that transform spaces into stunning environments.</p>
              <p>Our commitment to quality and craftsmanship has made us a trusted name in decorative crystals for homes and offices alike.</p>
            </div>
          </section>
        );
      case 'contact':
        return (
          <section className="contact-section">
            <h2>Contact Us</h2>
            <br />
            <br />
            <br />
            <div className="contact-content">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>Email: info@thecrystalcraft.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Crystal Avenue, Craft City, CC 12345</p>
              </div>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </section>
        );
      default:
        return (
          <>
            {/* Categories */}
            <div className="categories">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              {filteredItems.map(item => (
                <div key={item.id} className="product-card">
                  <div className="product-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="product-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="product-category">{item.category}</div>
                    <div className="product-price">
                      ${item.price}
                    </div>
                    <button className="buy-button">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-brand">The Crystal Craft</div>
        <div className="nav-links">
          <button 
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About Us
          </button>
          <button 
            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <header className="hero">
          <div className="hero-content">
            <h1>The Crystal Craft</h1>
            <p>Transform your space with our exquisite crystal decorative pieces</p>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main>
        <section className="content-section">
          {renderContent()}
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2024 The Crystal Craft. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
