import axios from "axios";

const API_URL = 'https://682c55e4d29df7a95be690bd.mockapi.io/api/v1/movies';

export const getMovies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createMovie = async (movie) => {
  const response = await axios.post(API_URL, movie);
  return response.data;
};

export const editMovie = async (movie) => {
  const response = await axios.put(`${API_URL}/${movie.id}`, movie);
  return response.data;
};

export const removeMovie = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
