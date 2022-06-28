import React from 'react';
import { useDispatch } from 'react-redux';
import { AddBook } from '../redux/books/books';

const BookInput = () => {
  const dispatch = useDispatch();
  const InputHandler = (e) => {
    e.preventDefault();
    const ValorTitle = e.target.title.value;
    const ValorAuthor = e.target.author.value;
    const Title = ValorTitle;
    const Author = ValorAuthor;
    dispatch(AddBook(Title, Author));
    e.target.reset();
  };

  return (
    <form className="bookinput" onSubmit={InputHandler}>
      <input
        id="title"
        type="text"
        placeholder="Author..."
        required
      />
      <input
        id="author"
        type="text"
        placeholder="Book Title..."
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookInput;
