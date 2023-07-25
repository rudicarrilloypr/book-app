// En src/components/Book.js
import React from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ title, author, id }) => { // Utiliza 'id' en lugar de 'item_id'
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={onDelete} type="button">Erase Book</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired, // Aquí también, usa 'id' en lugar de 'item_id'
};

export default Book;
