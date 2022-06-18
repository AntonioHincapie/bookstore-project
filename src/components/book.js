import React from 'react';

export default function BookItem(props) {
  return <li>{props.libro.author}, {props.libro.name}</li>
}
