import React from 'react';

export default function BookItem(props) {
  const { author, title } = props;

  return (
    <li>
      {author}
      {', '}
      {title}
    </li>
  )
}
