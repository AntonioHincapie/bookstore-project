import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { author, title } = props;

  return (
    <li>
      {author}
      {', '}
      {title}
    </li>
  );
};

BookItem.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookItem;
