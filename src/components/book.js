import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
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
        <h4 className="type">Category</h4>
        <ul className="buttons">
          <li>
            <button className="actionBton" type="button" onClick={delHandler}>Delete</button>
          </li>
          <li>
            <button className="actionBton" type="button">Comments</button>
          </li>
          <li>
            <button className="actionBton" type="button">Edit book</button>
          </li>
        </ul>
      </div>
      <div className="bookTrack">
        <div className="bookPercentage">
          <CircularProgressBar
            percent={80}
            size={100}
            number={false}
          />
          <div className="bookPercentData">
            <h3>80%</h3>
            <p>Percentage Completed</p>
          </div>
        </div>
      </div>
      <div className="bookRead">
        <p>Current Chapter</p>
        <h3>18</h3>
        <button type="button" className="updateBtn">Update</button>
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
