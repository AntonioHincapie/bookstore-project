import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
