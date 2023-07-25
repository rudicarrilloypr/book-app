// En src/components/NewBookForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/booksSlice';

const NewBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({
        item_id: nanoid(),
        title,
        author,
        category: 'Unknown Category',
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tittle" value={title} onChange={(e) => setTitle(e.target.value)} />

      {/* Cambia el placeholder y el estado correspondiente a 'author' */}
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />

      <button type="submit">Add Book</button>
    </form>
  );
};

export default NewBookForm;
