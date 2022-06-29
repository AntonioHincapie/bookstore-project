const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/m8Y4ZPtAHK2eZguBBm1C/books';
const ADDBOOK = 'bookstore-project/books/ADDBOOK';
const DELETEBOOK = 'bookstore-project/books/DELETEBOOK';
const GETBOOK = 'bookstore-project/books/GETBOOK';

export default function BookReducer(state = [], action = {}) {
  switch (action.type) {
    case GETBOOK:
      return [...action.books]
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

const AddBook = (book) => ({
  type: ADDBOOK,
  book,
});

const BookToErase = (id) => ({
  type: DELETEBOOK,
  bookToErase: id,
});

const GetBook = (books) => ({
  type: GETBOOK,
  books,
})

export const FetchBook = () => (dispatch) => {
  const List = [];
  fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
    accept: 'application/json',
    },
  })
  .then((response) => response.json())
  .then((result) => {
    const DataEntry = Object.entries(result);
    DataEntry.forEach((value) => {
      List.push({
        title: value[1][0].title,
        author: value[1][0].author,
        category: value[1][0].category,
        id: value[0],
      });
    });
    dispatch(GetBook(List));
  });
};

export const AddFetchBook = (book) => async (dispatch) => {
  const post = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    accept: 'application/json',
    },
    body: JSON.stringify(
      {
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: '',
      },
    ),
  });
  if (post.status === 201) {
    dispatch(AddBook(book));
  }
};

export const DeleteFetchBook = (id) => async (dispatch) => {
  const DelURL = `${URL}/${id}`;
  const delFecthBook = await fetch(DelURL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    accept: 'application/json',
    },
  });
  if (delFecthBook.status === 201) {
    dispatch(BookToErase(id));
  }
};
