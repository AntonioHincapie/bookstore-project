import React from 'react';
import BookInput from './bookinput';
import BooksList from './booklist';
import NavBar from './navbar';
import './books.css';

export default function Books() {
  return (
    <div>
      <NavBar />
      <div className="books-headline">
        <h1>Hola</h1>
        <button type="button">Remove</button>
      </div>
      <BooksList />
      <BookInput />
    </div>
  );
}
