import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DeleteFetchBook } from '../redux/books/books';

const BookItem = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, id,
  } = props;
  const delHandler = () => {
    dispatch(DeleteFetchBook(id));
  };
  return (
    <div className="BookContainer">
      <div className="data">
        <h4 className="title">{title}</h4>
        <h4 className="author">{author}</h4>
        <h4 className="type">''</h4>
        <ul className="buttons">
          <button type="button" onClick={delHandler}>Delete</button>
        </ul>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
