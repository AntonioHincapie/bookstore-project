import React from 'react';
import { Link } from 'react-router-dom';
import user from './user.png';
import './navbar.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-liks">
        <h1>Bookstore CMS</h1>
        <nav className="navlinks">
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </nav>
      </div>
      <div className="img">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}
