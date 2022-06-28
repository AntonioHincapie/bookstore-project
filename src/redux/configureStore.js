import { combineReducers, createStore } from 'redux';
import BookReducer from './books/books';
import CateReducer from './categories/categories';

const rootReducer = combineReducers({
  libros: BookReducer,
  categories: CateReducer,
});

const store = createStore(rootReducer);

export default store;
