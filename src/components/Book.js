// src/components/Book.js
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title, author, id, onDelete,
}) => (
  <div className="book-card">
    <h2 className="book-title-label">{title}</h2>
    <h3 className="book-author-label">{author}</h3>
    <button className="comments-button" type="button">Comments</button>
    <span> | </span>
    <button className="delete-button" onClick={onDelete} type="button">Remove</button>
    <span> | </span>
    <button className="edit-button" type="button">Edit</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
