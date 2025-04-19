import React from 'react'
import Movie from './Movie'

const ListMovies = ({title, carouselId, slides = []}) => {
  return (
    <section className="py-10 mx-10">
      <div className="text-start mb-6">
        <h2 className="text-4xl font-bold">{ title }</h2>
      </div>
    
      <div className="carousel w-full overflow-hidden">
        {slides.map((slideImages, index) => {
          const currentId = `${carouselId}-slide${index + 1}`;
          const prevId = `${carouselId}-slide${(index - 1 + slides.length) % slides.length + 1}`;
          const nextId = `${carouselId}-slide${(index + 1) % slides.length + 1}`;
          return (
            <Movie
              key={currentId}
              id={currentId}
              images={slideImages}
              prevId={prevId}
              nextId={nextId}
            />
          );
        })}
      </div>
    </section>
  )
}

export default ListMovies