import { v4 as uuidv4 } from 'uuid';

const ADDBOOK = 'bookstore-project/books/ADDBOOK';
const DELETEBOOK = 'bookstore-project/books/DELETEBOOK';

export default function BookReducer(state = [], action) {
  switch (action.type) {
    case ADDBOOK:
      return [...state,
        { title: action.book.title, author: action.book.author, id: action.book.id },
      ];
    case DELETEBOOK:
      return state.filter((e) => e.id !== action.bookToErase);
    default:
      return state;
  }
}

export const AddBook = (title, author) => ({
  type: ADDBOOK,
  book: { title, author, id: uuidv4() },
});

export const BookToErase = (id) => ({
  type: DELETEBOOK,
  bookToErase: id,
});
