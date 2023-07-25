import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (appId) => {
    const response = await axios.get(`${API_BASE_URL}/${appId}/books`);
    return response.data;
  },
);

export const createBook = createAsyncThunk(
  'books/createBook',
  async ({ appId, book }) => {
    await axios.post(`${API_BASE_URL}/${appId}/books`, book);
    return book;
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async ({ appId, id }) => {
    await axios.delete(`${API_BASE_URL}/${appId}/books/${id}`);
    return id;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line max-len
      .addCase(fetchBooks.fulfilled, (state, action) => Object.entries(action.payload).map(([id, bookData]) => ({
        id,
        title: bookData[0].title,
        author: bookData[0].author,
      })))
      .addCase(createBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const index = state.findIndex((book) => book.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      });
  },
});

export default booksSlice.reducer;
