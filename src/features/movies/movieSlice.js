import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://682c55e4d29df7a95be690bd.mockapi.io/api/v1/movies';

export const fetchMovies = createAsyncThunk('movies', async () => {
  const response = await axios.get(API_URL);
  return response.data;
})

export const addMovie = createAsyncThunk('movies/add', async (movie) => {
  const response = await axios.post(API_URL, movie);
  return response.data;
})

export const updateMovie = createAsyncThunk('movies/update', async (movie) => {
  const response = await axios.put(`${API_URL}/${movie.id}`, movie);
  return response.data;
})

export const deleteMovie = createAsyncThunk('movie/delete', async (id) => {
  await axios.get(`${API_URL}/${id}`);
  return id;
})


const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })

      .addCase(updateMovie.fulfilled, (state, action) => {
        const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
        if (index !== -1) {
          state.movies[index] = action.payload;
        }
      })

      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter((movie) => movie.id !== action.payload);
      });
  },
});

export default movieSlice.reducer;