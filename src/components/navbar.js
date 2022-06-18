import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <div>
        <h1>Bookstore</h1>
      </div>
      <nav className="navlinks">
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
  );
}