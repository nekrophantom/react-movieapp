import React from 'react';
import { FaPlay, FaHeart } from 'react-icons/fa';

const Movie = ({ id, images, prevId, nextId }) => {
  return (
    <div id={id} className="carousel-item relative w-full">
      <div className="flex justify-center gap-4 overflow-x-auto whitespace-nowrap px-4">
        {
          images.map((src, idx) => (
            <div key={idx} className="relative group min-w-[50%] sm:min-w-[150px]">
              <img
                src={src}
                alt={`Movie ${idx + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex justify-center items-center flex-col">
                <div className="text-center text-white p-4">
                  <h3 className="font-bold text-lg mb-3">Movie Title</h3>
                  <div className="flex justify-center space-x-4">
                    <button className="bg-white text-black p-3 rounded-full hover:bg-opacity-70">
                      <FaPlay className="text-xl text-green-600" />
                    </button>
                    <button className="bg-white text-black p-3 rounded-full hover:bg-opacity-70">
                      <FaHeart className="text-xl text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {/* Carousel Navigation */}
      <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between items-center">
        <a href={`#${prevId}`} className="btn btn-circle">❮</a>
        <a href={`#${nextId}`} className="btn btn-circle">❯</a>
      </div>
    </div>
  );
};

export default Movie;
