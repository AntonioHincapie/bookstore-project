import React from 'react';

export default function BookInput() {
  return(
    <form className="bookinput">
      <input
        type="text"
        className="author-input"
        name="author"
        placeholder="Author..."
      />
      <input
        type="text"
        className="name-input"
        name="name"
        placeholder="Book Title..."
      />
      <button className="book-submit" type="button">Submit</button>
    </form>
  );
}