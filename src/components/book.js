import React from 'react';

export default class BookItem extends React.Component {
  render() {
    return <li>{this.props.libro.author}, {this.props.libro.name}</li>
  }
}