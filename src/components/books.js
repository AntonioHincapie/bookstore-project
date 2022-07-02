import React from 'react';
import BookInput from './bookinput';
import BooksList from './booklist';
import NavBar from './navbar';
import './books.css';

export default function Books() {
  return (
    <div>
      <NavBar />
      <BooksList />
      <BookInput />
    </div>
  );
}
