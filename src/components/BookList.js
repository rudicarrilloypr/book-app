// src/components/BookList.js
import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books, onDelete }) => (
  <div className="books-list-container">
    {books.map((book) => (
      <React.Fragment key={book.id}>
        <Book
          title={book.title}
          author={book.author}
          id={book.id}
          onDelete={() => onDelete(book.id)}
        />
        {/* Aquí puedes añadir lo que quieras después de cada libro */}
      </React.Fragment>
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
