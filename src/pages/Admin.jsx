import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies,addMovie,updateMovie,deleteMovie, } from "../features/movies/movieSlice";
import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

const Admin = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editMovieId, setEditMovieId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    dispatch(addMovie({ title, description }));
    setTitle("");
    setDescription("");
  };

  const startEdit = (movie) => {
    setEditMovieId(movie.id);
    setEditTitle(movie.title);
    setEditDescription(movie.description);
  };

  const cancelEdit = () => {
    setEditMovieId(null);
    setEditTitle("");
    setEditDescription("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editTitle.trim() || !editDescription.trim()) return;
    dispatch(updateMovie({ id: editMovieId, title: editTitle, description: editDescription }));
    cancelEdit();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      dispatch(deleteMovie(id));
    }
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="hero min-h-screen" style={{ backgroundImage: "url(/assets/img/BG.jpg)" }}>
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="card card-border bg-base-100 w-96">
              <div className="card-body">
                <h2 className="card-title flex items-center justify-center gap-2">
                  <img src="/assets/Logo.png" alt="Logo" className="h-10" />
                  CHILL
                </h2>
                <h1 className="card-title mt-5">Admin Panel</h1>
                <p className="mb-4">Manage your movie list</p>

                {/* Add Movie Form */}
                <form onSubmit={handleAdd} className="space-y-4">
                  <Input
                    label="Title"
                    placeholder="Movie title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-black"
                  />
                  <Input
                    label="Description"
                    placeholder="Movie description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="text-black"
                  />
                  <Button type="submit" className="bg-blue-600 w-full">
                    Add Movie
                  </Button>
                </form>

                <div className="divider mt-6 mb-2">Movie List</div>

                {/* Movie List */}
                <div className="text-left space-y-4 max-h-80 overflow-y-auto pr-1">
                  {loading && <p>Loading...</p>}
                  {error && <p className="text-red-500">{error}</p>}
                  {movies
                    .slice()
                    .reverse()
                    .map((movie) => (
                      <div key={movie.id} className="bg-base-200 p-3 rounded text-sm text-center flex flex-col items-center">
                        {editMovieId === movie.id ? (
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
                              <Button type="submit" className="bg-green-600 w-full">
                                Save
                              </Button>
                              <Button type="button" className="bg-gray-400 w-full" onClick={cancelEdit}>
                                Cancel
                              </Button>
                            </div>
                          </form>
                        ) : (
                          <>
                            <h3 className="font-semibold">{movie.title}</h3>
                            <p>{movie.description}</p>
                            <small className="block mb-2 text-gray-400">
                              Created at: {new Date(movie.createdAt).toLocaleString()}
                            </small>
                            <div className="flex gap-2">
                              <Button className="bg-yellow-500 px-4 py-1 text-sm" onClick={() => startEdit(movie)}>
                                Edit
                              </Button>
                              <Button className="bg-red-500 px-4 py-1 text-sm" onClick={() => handleDelete(movie.id)}>
                                Delete
                              </Button>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
