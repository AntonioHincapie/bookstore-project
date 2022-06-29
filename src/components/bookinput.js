import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddFetchBook } from '../redux/books/books';

const BookInput = () => {
  const dispatch = useDispatch();
  const InputHandler = (e) => {
    e.preventDefault();
    const ValorTitle = e.target.title.value;
    const ValorAuthor = e.target.author.value;
    const title = ValorTitle;
    const author = ValorAuthor;
    const id = uuidv4();
    dispatch(AddFetchBook({ title, author, id }));
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
};

export default BookInput;
