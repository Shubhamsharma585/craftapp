import React, { useState } from 'react';
import { NavLink } from 'react-router';
import './Nav.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", end: true },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="main-nav">
      <div className="nav-brand">The Crystal Craft</div>
      <button className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map(({ path, label, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar; 