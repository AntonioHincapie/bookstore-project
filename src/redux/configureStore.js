import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import BookReducer from './books/books';
import CateReducer from './categories/categories';

const rootReducer = combineReducers({
  libros: BookReducer,
  categories: CateReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
