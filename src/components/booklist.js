import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBook } from '../redux/books/books';
import BookItem from './book';

export default function BooksList() {
  const books = useSelector((state) => state.libros);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchBook());
  }, [dispatch]);

  return (
    <ul>
      {
        books.map((book) => (
          <BookItem
            key={book.id}
            author={book.author}
            title={book.title}
            category={book.category}
            id={book.id}
          />
        ))
      }
    </ul>
  );
}
