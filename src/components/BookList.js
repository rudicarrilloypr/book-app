/* eslint-disable react/prop-types */
// En src/components/BookList.js
import React from 'react';
import Book from './Book';

// eslint-disable-next-line react/prop-types
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

export default BookList;
