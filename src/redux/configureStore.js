import { combineReducers, createStore } from 'redux';
import BookReducer from './books/books';
import CateReducer from './categories/categories';

const rootReducer = combineReducers({
  BookReducer,
  CateReducer,
});

const store = createStore(rootReducer);

export default store;