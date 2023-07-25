import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books, onDelete }) => (
  <div>
    {books.map((book) => (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        onDelete={() => onDelete(book.id)}
      />
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
