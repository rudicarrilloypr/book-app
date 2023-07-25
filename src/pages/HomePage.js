// En src/pages/HomePage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, createBook, deleteBook } from '../redux/books/booksSlice';
import BookList from '../components/BookList';
import NewBookForm from '../components/NewBookForm';

const HomePage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const appId = 'IlTA9iE7qJQuYgFTFs06'; // Asegurate de usar el ID correcto aquí

  // Ahora fetchBooks se llama dentro de un useEffect
  useEffect(() => {
    if (appId) {
      dispatch(fetchBooks(appId));
    }
  }, [appId, dispatch]);

  const handleAddBook = (book) => {
    if (appId) {
      dispatch(createBook({ appId, book }));
    }
  };

  const handleDeleteBook = (id) => {
    if (appId) {
      dispatch(deleteBook({ appId, id }));
    }
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
