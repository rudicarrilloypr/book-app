// En src/pages/HomePage.js
import React, { useState } from 'react';
import BookList from '../components/BookList';
import NewBookForm from '../components/NewBookForm';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <NewBookForm onSubmit={handleAddBook} />
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
