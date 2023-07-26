import React from 'react';
import PropTypes from 'prop-types';
import { Circle } from 'rc-progress';

const Book = ({
  title, author, id, onDelete,
}) => (
  <div className="book-card">
    <h1 className="book-category-label">Category</h1>
    <h2 className="book-title-label">{title}</h2>
    <div className="book-content">
      <div className="book-left-section">
        <h3 className="book-author-label">{author}</h3>
        <div className="book-actions">
          <button className="comments-button" type="button">Comments</button>
          <span> | </span>
          <button className="delete-button" onClick={onDelete} type="button">Remove</button>
          <span> | </span>
          <button className="edit-button" type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div className="progress-bar-container">
          <Circle percent="75" strokeWidth="5" strokeColor="#0290ff" className="progress-bar" />
          <p className="current-porcentage-number">75%</p>
          <p className="current-completed">COMPLETED</p>
        </div>
        <div className="current-chapter-container">
          <h3 className="current-chapter">CURRENT CHAPTER</h3>
          <p className="current-chapter-number">Chapter 1</p>
          <button className="progress-button" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
