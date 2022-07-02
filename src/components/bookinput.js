import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './bookinput.css';
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
    <div className="input">
      <form className="bookinput" onSubmit={InputHandler}>
        <input
          className="addBook"
          id="title"
          type="text"
          placeholder="Book Title..."
          required
        />
        <input
          className="addBook"
          id="author"
          type="text"
          placeholder="Author"
          required
        />
        <select className="addBook">
          <option value="" disabled selected>Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Action">Action</option>
          <option value="LifeBased">Life Based</option>
        </select>
        <button className="inputBtn" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookInput;
