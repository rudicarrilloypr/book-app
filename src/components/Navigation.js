import React from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const Navigation = () => (
  <nav className="navbar-container">
    <div className="navbar-content">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <Link to="/" className="books">BOOKS</Link>
      <Link to="/categories" className="categories">CATEGORIES</Link>
    </div>
    <div className="navbar-icon">
      <PersonIcon />
    </div>
  </nav>
);

export default Navigation;
