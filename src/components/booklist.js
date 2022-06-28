import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './book';

export default function BooksList() {
  const libros = useSelector((state) => state.libros);
  
  return (
    <ul>
      {
        libros.map((libro) => (
          <BookItem
            key={libro.id}
            author={libro.author}
            title={libro.title}
            id={libro.id}
          />
        ))
      }
    </ul>
  );
}
