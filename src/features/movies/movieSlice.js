import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getMovies,
  createMovie,
  editMovie,
  removeMovie,
} from "../../services/api/movieServices";

export const fetchMovies = createAsyncThunk('movies/fetch', async () => {
  return await getMovies();
});

export const addMovie = createAsyncThunk('movies/add', async (movie) => {
  return await createMovie(movie);
});

export const updateMovie = createAsyncThunk('movies/update', async (movie) => {
  return await editMovie(movie);
});

export const deleteMovie = createAsyncThunk('movies/delete', async (id) => {
  return await removeMovie(id);
});

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
