import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import BookList from '../components/BookList';
import NewBookForm from '../components/NewBookForm';

const HomePage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleAddBook = (book) => {
    dispatch(addBook(book));
  };

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
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
