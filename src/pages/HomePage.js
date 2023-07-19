import React, { useState } from 'react';
import BookList from '../components/BookList';
import NewBookForm from '../components/NewBookForm';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, { id: Date.now(), ...book }]);
  };

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <NewBookForm onSubmit={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default HomePage;
