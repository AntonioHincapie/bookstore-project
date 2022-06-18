import React from 'react';
import BookItem from './book';

export default class BooksList extends React.Component {
  render() {
    return(
      <ul>
        {this.props.libros.map(libro => (
          <BookItem key={libro.id} libro={libro} />
        ))}
      </ul>
    );
  }
}