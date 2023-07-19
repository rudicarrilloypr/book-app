// En src/components/NewBookForm.js
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const NewBookForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Título del libro" value={title} onChange={(e) => setTitle(e.target.value)} />

      {/* Cambia el placeholder y el estado correspondiente a 'author' */}
      <input type="text" placeholder="Autor del libro" value={author} onChange={(e) => setAuthor(e.target.value)} />

      <button type="submit">Añadir libro</button>
    </form>
  );
};

NewBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewBookForm;
