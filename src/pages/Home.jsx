import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ListMovies from '../components/ListMovies'

const Home = () => {
  const continueWatchingSlides = [
    [
      { id: 1, title: "Movie 1", image: "/assets/img/horizontal/Type=1.png"},
      { id: 2, title: "Movie 2", image: "/assets/img/horizontal/Type=10.png"},
      { id: 3, title: "Movie 3", image: "/assets/img/horizontal/Type=11.png"},
      { id: 4, title: "Movie 4", image: "/assets/img/horizontal/Type=12.png"},
      { id: 5, title: "Movie 5", image: "/assets/img/horizontal/Type=17.png"},
      { id: 6, title: "Movie 6", image: "/assets/img/horizontal/Type=18.png"},
    ],
    [
      { id: 7, title: "Movie 7", image: "/assets/img/horizontal/Type=15.png"},
      { id: 8, title: "Movie 8", image: "/assets/img/horizontal/Type=16.png"},
      { id: 9, title: "Movie 9", image: "/assets/img/horizontal/Type=17.png"},
      { id: 10, title: "Movie 10", image: "/assets/img/horizontal/Type=18.png"},
      { id: 11, title: "Movie 11", image: "/assets/img/horizontal/Type=11.png"},
      { id: 12, title: "Movie 12", image: "/assets/img/horizontal/Type=12.png"},
    ],
    [
      { id: 13, title: "Movie 13", image: "/assets/img/horizontal/Type=21.png"},
      { id: 14, title: "Movie 14", image: "/assets/img/horizontal/Type=22.png"},
      { id: 15, title: "Movie 15", image: "/assets/img/horizontal/Type=23.png"},
      { id: 16, title: "Movie 16", image: "/assets/img/horizontal/Type=24.png"},
      { id: 17, title: "Movie 17", image: "/assets/img/horizontal/Type=29.png"},
      { id: 18, title: "Movie 18", image: "/assets/img/horizontal/Type=30.png"},
    ],
    [
      { id: 19, title: "Movie 19", image: "/assets/img/horizontal/Type=27.png"},
      { id: 20, title: "Movie 20", image: "/assets/img/horizontal/Type=28.png"},
      { id: 21, title: "Movie 21", image: "/assets/img/horizontal/Type=29.png"},
      { id: 22, title: "Movie 22", image: "/assets/img/horizontal/Type=30.png"},
      { id: 23, title: "Movie 23", image: "/assets/img/horizontal/Type=23.png"},
      { id: 24, title: "Movie 24", image: "/assets/img/horizontal/Type=24.png"},
    ]
  ]

  const topRatingSlides = [
    [
      { id: 1, title: "Movie 1", image: "/assets/img/vertical/Number=1.png"},
      { id: 2, title: "Movie 2", image: "/assets/img/vertical/Number=10.png"},
      { id: 3, title: "Movie 3", image: "/assets/img/vertical/Number=11.png"},
      { id: 4, title: "Movie 4", image: "/assets/img/vertical/Number=12.png"},
      { id: 5, title: "Movie 5", image: "/assets/img/vertical/Number=13.png"},
      { id: 6, title: "Movie 6", image: "/assets/img/vertical/Number=14.png"},
      { id: 6, title: "Movie 6", image: "/assets/img/vertical/Number=19.png"},
      { id: 6, title: "Movie 6", image: "/assets/img/vertical/Number=20.png"},
    ],
    [
      { id: 7, title: "Movie 7", image: "/assets/img/vertical/Number=15.png"},
      { id: 8, title: "Movie 8", image: "/assets/img/vertical/Number=16.png"},
      { id: 9, title: "Movie 9", image: "/assets/img/vertical/Number=17.png"},
      { id: 10, title: "Movie 10", image: "/assets/img/vertical/Number=18.png"},
      { id: 11, title: "Movie 11", image: "/assets/img/vertical/Number=19.png"},
      { id: 12, title: "Movie 12", image: "/assets/img/vertical/Number=20.png"},
      { id: 13, title: "Movie 13", image: "/assets/img/vertical/Number=12.png"},
      { id: 14, title: "Movie 14", image: "/assets/img/vertical/Number=23.png"},
    ],
    [
      { id: 15, title: "Movie 15", image: "/assets/img/vertical/Number=21.png"},
      { id: 16, title: "Movie 16", image: "/assets/img/vertical/Number=22.png"},
      { id: 17, title: "Movie 17", image: "/assets/img/vertical/Number=23.png"},
      { id: 18, title: "Movie 18", image: "/assets/img/vertical/Number=24.png"},
      { id: 19, title: "Movie 19", image: "/assets/img/vertical/Number=25.png"},
      { id: 20, title: "Movie 20", image: "/assets/img/vertical/Number=26.png"},
      { id: 21, title: "Movie 21", image: "/assets/img/vertical/Number=17.png"},
      { id: 22, title: "Movie 22", image: "/assets/img/vertical/Number=18.png"},
    ],
    [
      { id: 23, title: "Movie 23", image: "/assets/img/vertical/Number=27.png"},
      { id: 24, title: "Movie 24", image: "/assets/img/vertical/Number=28.png"},
      { id: 25, title: "Movie 25", image: "/assets/img/vertical/Number=29.png"},
      { id: 26, title: "Movie 26", image: "/assets/img/vertical/Number=30.png"},
      { id: 27, title: "Movie 27", image: "/assets/img/vertical/Number=9.png"},
      { id: 28, title: "Movie 28", image: "/assets/img/vertical/Number=8.png"},
      { id: 29, title: "Movie 29", image: "/assets/img/vertical/Number=21.png"},
      { id: 30, title: "Movie 30", image: "/assets/img/vertical/Number=22.png"},
    ]
  ]

  const trendingSlides = [
    [
      { id: 1, title: "Movie 1", image: "/assets/img/vertical/Number=20.png"},
      { id: 2, title: "Movie 2", image: "/assets/img/vertical/Number=10.png"},
      { id: 3, title: "Movie 3", image: "/assets/img/vertical/Number=14.png"},
      { id: 4, title: "Movie 4", image: "/assets/img/vertical/Number=11.png"},
      { id: 5, title: "Movie 5", image: "/assets/img/vertical/Number=13.png"},
      { id: 6, title: "Movie 6", image: "/assets/img/vertical/Number=1.png"},
      { id: 7, title: "Movie 7", image: "/assets/img/vertical/Number=12.png"},
      { id: 8, title: "Movie 8", image: "/assets/img/vertical/Number=19.png"},
    ],
    [
      { id: 9, title: "Movie 9", image: "/assets/img/vertical/Number=17.png"},
      { id: 10, title: "Movie 10", image: "/assets/img/vertical/Number=16.png"},
      { id: 11, title: "Movie 11", image: "/assets/img/vertical/Number=20.png"},
      { id: 12, title: "Movie 12", image: "/assets/img/vertical/Number=13.png"},
      { id: 13, title: "Movie 13", image: "/assets/img/vertical/Number=15.png"},
      { id: 14, title: "Movie 14", image: "/assets/img/vertical/Number=19.png"},
      { id: 15, title: "Movie 15", image: "/assets/img/vertical/Number=18.png"},
      { id: 16, title: "Movie 16", image: "/assets/img/vertical/Number=12.png"},
    ],
    [
      { id: 17, title: "Movie 17", image: "/assets/img/vertical/Number=18.png"},
      { id: 18, title: "Movie 18", image: "/assets/img/vertical/Number=25.png"},
      { id: 19, title: "Movie 19", image: "/assets/img/vertical/Number=22.png"},
      { id: 20, title: "Movie 20", image: "/assets/img/vertical/Number=23.png"},
      { id: 21, title: "Movie 21", image: "/assets/img/vertical/Number=26.png"},
      { id: 22, title: "Movie 22", image: "/assets/img/vertical/Number=17.png"},
      { id: 23, title: "Movie 23", image: "/assets/img/vertical/Number=24.png"},
      { id: 24, title: "Movie 24", image: "/assets/img/vertical/Number=21.png"},
    ],
    [
      { id: 25, title: "Movie 25", image: "/assets/img/vertical/Number=30.png"},
      { id: 26, title: "Movie 26", image: "/assets/img/vertical/Number=21.png"},
      { id: 27, title: "Movie 27", image: "/assets/img/vertical/Number=29.png"},
      { id: 28, title: "Movie 28", image: "/assets/img/vertical/Number=28.png"},
      { id: 29, title: "Movie 29", image: "/assets/img/vertical/Number=22.png"},
      { id: 30, title: "Movie 30", image: "/assets/img/vertical/Number=27.png"},
      { id: 31, title: "Movie 31", image: "/assets/img/vertical/Number=8.png"},
      { id: 32, title: "Movie 32", image: "/assets/img/vertical/Number=9.png"},
    ]
  ]

  const newMoviesSlides = [
    [
      { id: 1, title: "Movie 1", image: "/assets/img/vertical/Number=27.png"},
      { id: 2, title: "Movie 2", image: "/assets/img/vertical/Number=28.png"},
      { id: 3, title: "Movie 3", image: "/assets/img/vertical/Number=29.png"},
      { id: 4, title: "Movie 4", image: "/assets/img/vertical/Number=30.png"},
      { id: 5, title: "Movie 5", image: "/assets/img/vertical/Number=9.png"},
      { id: 6, title: "Movie 6", image: "/assets/img/vertical/Number=8.png"},
      { id: 7, title: "Movie 7", image: "/assets/img/vertical/Number=21.png"},
      { id: 8, title: "Movie 8", image: "/assets/img/vertical/Number=22.png"},
    ],
    [
      { id: 9, title: "Movie 9", image: "/assets/img/vertical/Number=21.png"},
      { id: 10, title: "Movie 10", image: "/assets/img/vertical/Number=22.png"},
      { id: 11, title: "Movie 11", image: "/assets/img/vertical/Number=23.png"},
      { id: 12, title: "Movie 12", image: "/assets/img/vertical/Number=24.png"},
      { id: 13, title: "Movie 13", image: "/assets/img/vertical/Number=25.png"},
      { id: 14, title: "Movie 14", image: "/assets/img/vertical/Number=26.png"},
      { id: 15, title: "Movie 15", image: "/assets/img/vertical/Number=17.png"},
      { id: 16, title: "Movie 16", image: "/assets/img/vertical/Number=18.png"},
    ],
    [
      { id: 17, title: "Movie 17", image: "/assets/img/vertical/Number=15.png"},
      { id: 18, title: "Movie 18", image: "/assets/img/vertical/Number=16.png"},
      { id: 19, title: "Movie 19", image: "/assets/img/vertical/Number=17.png"},
      { id: 20, title: "Movie 20", image: "/assets/img/vertical/Number=18.png"},
      { id: 21, title: "Movie 21", image: "/assets/img/vertical/Number=19.png"},
      { id: 22, title: "Movie 22", image: "/assets/img/vertical/Number=20.png"},
      { id: 23, title: "Movie 23", image: "/assets/img/vertical/Number=12.png"},
      { id: 24, title: "Movie 24", image: "/assets/img/vertical/Number=13.png"},
    ],
    [
      { id: 25, title: "Movie 25", image: "/assets/img/vertical/Number=1.png"},
      { id: 26, title: "Movie 26", image: "/assets/img/vertical/Number=10.png"},
      { id: 27, title: "Movie 27", image: "/assets/img/vertical/Number=11.png"},
      { id: 28, title: "Movie 28", image: "/assets/img/vertical/Number=12.png"},
      { id: 29, title: "Movie 29", image: "/assets/img/vertical/Number=13.png"},
      { id: 30, title: "Movie 30", image: "/assets/img/vertical/Number=14.png"},
      { id: 31, title: "Movie 31", image: "/assets/img/vertical/Number=19.png"},
      { id: 32, title: "Movie 32", image: "/assets/img/vertical/Number=20.png"},
    ]
  ]

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ListMovies title='Melanjutkan Tonton Film' carouselId='continueWatching' slides={continueWatchingSlides} />
        <ListMovies title='Top Rating Film Hari' carouselId='topRating' slides={topRatingSlides}/>
        <ListMovies title='Film Trending' carouselId='trending' slides={trendingSlides} />
        <ListMovies title='Rilis Baru' carouselId='newMovies' slides={newMoviesSlides}/>
      </main>
      <Footer />
    </>
  )
}

export default Home