// En NewBookForm.js
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
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <input className="form-input-title" type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input className="form-input-author" type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <button className="form-submit-button" type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

NewBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewBookForm;
