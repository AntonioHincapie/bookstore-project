import React from 'react';
import BookItem from './book';

export default function BooksList(props) {
  return (
    <ul>
      {props.libros.map(libro => (
        <BookItem key={libro.id} libro={libro} />
      ))}
    </ul>
  );
}
