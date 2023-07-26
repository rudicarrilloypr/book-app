// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar-container">
    <h1 className="Bookstore-CMS">Bookstore CMS</h1>
    <Link to="/" className="books">BOOKS</Link>
    <Link to="/categories" className="categories">CATEGORIES</Link>
  </nav>
);

export default Navigation;
