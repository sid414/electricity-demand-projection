import React from 'react';
import logo from '../src/assets/p1.png'; // Make sure your images are in the `assets` folder
import adminAuth from '../src/assets/p2.png';

const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#one">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#two">FAQ</a></li>
        </ul>
        <div className="admin-auth">
          <img src={adminAuth} alt="Admin Auth" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
