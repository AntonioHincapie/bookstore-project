import React, { useState } from 'react';
import BookItem from './book';

export default function BooksList() {
  const [libros] = useState([{
    key: 1,
    title: 'Hello World!',
    author: 'Pedro',
  },
  {
    key: 2,
    title: 'Hola Mundo!',
    author: 'Juan',
  }]);

  return (
    <ul>
      {
        libros.map((libro) => (
          <BookItem
            key={libro.key}
            author={libro.author}
            title={libro.title}
          />
        ))
      }
    </ul>
  );
}
