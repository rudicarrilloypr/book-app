import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { createBook } from '../redux/books/booksSlice';

const NewBookForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const appId = 'IlTA9iE7qJQuYgFTFs06';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && appId) {
      const book = {
        item_id: nanoid(),
        title,
        author,
        category: 'Unknown Category',
      };
      dispatch(createBook({ appId, book: { ...book, id: book.item_id } }));
      onSubmit(book);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tittle" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Add Book</button>
    </form>
  );
};

NewBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewBookForm;
