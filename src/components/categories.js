import React from 'react';
import NavBar from './navbar';

export default function Categories() {
  return (
    <div>
      <NavBar />
      <h2>Categories</h2>
      <button type="button" className="book-categories">Check Status</button>
    </div>
  );
}
