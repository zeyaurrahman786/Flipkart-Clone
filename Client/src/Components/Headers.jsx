// src/Navbar.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../App.css'; // Import the CSS file for styling

const Headers = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Flipkart_logo.png" alt="Flipkart Logo" />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search for products, brands and more" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="navbar-links">
        <a href="#">Login</a>
        <a href="#">More</a>
        <a href="#">Cart</a>
      </div>
    </div>
  );
};

export default Headers;
