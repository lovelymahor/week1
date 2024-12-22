// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css'; // Assuming you might want to style the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>E-Commerce: Reaching Global Audiences</h2>
        <p>
          As e-commerce becomes a vital component for businesses to reach a global audience, the demand for customized and scalable e-commerce solutions is on the rise.
        </p>
        <p>
          The MERN stack (MongoDB, Express.js, React.js, Node.js) has emerged as a powerful combination of technologies to meet this growing need.
        </p>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E-Commerce. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
