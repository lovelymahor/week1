import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming you'll style the Navbar with CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Brand Name */}
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            E-Commerce
          </Link>
        </div>
        
        {/* Navigation Links */}
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/shop" className="navbar-link">Shop</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
        
        {/* Optional: Add a Cart or Profile icon */}
        <div className="navbar-icons">
          <span className="navbar-cart">
            <i className="fa fa-shopping-cart"></i>
          </span>
          <span className="navbar-profile">
            <i className="fa fa-user"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
