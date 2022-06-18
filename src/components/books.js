import React from 'react';
import BooksList from './booklist';
import NavBar from './navbar';

export default class Books extends React.Component {
  state={
    libros: [
      {
        id: 1,
        author: "",
        name: "",
      }
    ]
  };

  render () {  
    return (
      <div>
        <NavBar />
        <div className="books-headline">
          <h1>Hola</h1>
          <button type="button">Remove</button>
        </div>
        <BooksList libros={this.state.libros} />
      </div>
    );
  };
}