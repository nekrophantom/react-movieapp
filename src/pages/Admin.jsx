import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, addMovie, updateMovie, deleteMovie } from "../features/movies/movieSlice";
import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

const Admin = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  // States for new movie form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // States for editing
  const [editMovieId, setEditMovieId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // Add movie handler
  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    dispatch(addMovie({ title, description }));
    setTitle("");
    setDescription("");
  };

  // Edit movie button clicked
  const startEdit = (movie) => {
    setEditMovieId(movie.id);
    setEditTitle(movie.title);
    setEditDescription(movie.description);
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditMovieId(null);
    setEditTitle("");
    setEditDescription("");
  };

  // Submit update
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editTitle.trim() || !editDescription.trim()) return;

    dispatch(updateMovie({ id: editMovieId, title: editTitle, description: editDescription }));
    cancelEdit();
  };

  // Delete with confirm
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      dispatch(deleteMovie(id));
    }
  };

  return (
    <>
      <Navbar />
      <section>
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: "url(/assets/img/BG.jpg)" }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content w-full max-w-4xl px-4 flex flex-col gap-10">

            {/* Form Card */}
            <div className="card card-border bg-base-100 p-6 rounded-lg shadow-lg text-left">
              <h1 className="text-5xl mb-6 font-bold text-white">Movie List</h1>
              <form onSubmit={handleAdd} className="space-y-4">
                <Input
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-black"
                />
                <Input
                  label="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="text-black"
                />
                <Button type="submit" className="bg-blue-600">
                  Add Movie
                </Button>
              </form>
            </div>

            {/* Movie List Card */}
            <div className="card card-border bg-base-200 p-6 rounded-lg shadow-lg text-left">
              <h1 className="text-3xl mb-6 font-bold text-white">Admin - Movie List</h1>

              {loading && <p className="text-white">Loading...</p>}
              {error && <p className="text-red-500">{error}</p>}

              <ul className="space-y-4">
                {movies
                  .slice()
                  .reverse()
                  .map((movie) => (
                    <li
                      key={movie.id}
                      className="border p-4 rounded bg-base-300 text-white"
                    >
                      {editMovieId === movie.id ? (
                        // Edit form
                        <form onSubmit={handleUpdate} className="space-y-2">
                          <Input
                            label="Title"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            className="text-black"
                          />
                          <Input
                            label="Description"
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                            className="text-black"
                          />
                          <div className="flex gap-2">
                            <Button type="submit" className="bg-green-600">
                              Save
                            </Button>
                            <Button
                              type="button"
                              className="bg-gray-400"
                              onClick={cancelEdit}
                            >
                              Cancel
                            </Button>
                          </div>
                        </form>
                      ) : (
                        <>
                          <h3 className="font-semibold text-lg">{movie.title}</h3>
                          <p className="text-sm mb-2">{movie.description}</p>
                          <small className="block mb-3 text-gray-300">
                            Created at: {new Date(movie.createdAt).toLocaleString()}
                          </small>
                          <div className="flex gap-2">
                            <Button
                              className="bg-yellow-500"
                              onClick={() => startEdit(movie)}
                            >
                              Edit
                            </Button>
                            <Button
                              className="bg-red-500"
                              onClick={() => handleDelete(movie.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
