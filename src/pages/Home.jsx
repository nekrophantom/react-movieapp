import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ListMovies from '../components/ListMovies'

const Home = () => {
  const continueWatchingSlides = [
    [
      '/assets/img/horizontal/Type=1.png',
      '/assets/img/horizontal/Type=10.png',
      '/assets/img/horizontal/Type=11.png',
      '/assets/img/horizontal/Type=12.png',
      '/assets/img/horizontal/Type=17.png',
      '/assets/img/horizontal/Type=18.png',
    ],
    [
      '/assets/img/horizontal/Type=15.png',
      '/assets/img/horizontal/Type=16.png',
      '/assets/img/horizontal/Type=17.png',
      '/assets/img/horizontal/Type=18.png',
      '/assets/img/horizontal/Type=11.png',
      '/assets/img/horizontal/Type=12.png',
    ],
    [
      "/assets/img/horizontal/Type=21.png",
      "/assets/img/horizontal/Type=22.png",
      "/assets/img/horizontal/Type=23.png",
      "/assets/img/horizontal/Type=24.png",
      "/assets/img/horizontal/Type=29.png",
      "/assets/img/horizontal/Type=30.png",
    ],
    [
      "/assets/img/horizontal/Type=27.png",
      "/assets/img/horizontal/Type=28.png",
      "/assets/img/horizontal/Type=29.png",
      "/assets/img/horizontal/Type=30.png",
      "/assets/img/horizontal/Type=23.png",
      "/assets/img/horizontal/Type=24.png",
    ]
  ]

  const topRatingSlides = [
    [
      "/assets/img/vertical/Number=1.png",
      "/assets/img/vertical/Number=10.png",
      "/assets/img/vertical/Number=11.png",
      "/assets/img/vertical/Number=12.png",
      "/assets/img/vertical/Number=13.png",
      "/assets/img/vertical/Number=14.png",
      "/assets/img/vertical/Number=19.png",
      "/assets/img/vertical/Number=20.png",
    ],
    [
      "/assets/img/vertical/Number=15.png",
      "/assets/img/vertical/Number=16.png",
      "/assets/img/vertical/Number=17.png",
      "/assets/img/vertical/Number=18.png",
      "/assets/img/vertical/Number=19.png",
      "/assets/img/vertical/Number=20.png",
      "/assets/img/vertical/Number=12.png",
      "/assets/img/vertical/Number=13.png",
    ],
    [
      "/assets/img/vertical/Number=21.png",
      "/assets/img/vertical/Number=22.png",
      "/assets/img/vertical/Number=23.png",
      "/assets/img/vertical/Number=24.png",
      "/assets/img/vertical/Number=25.png",
      "/assets/img/vertical/Number=26.png",
      "/assets/img/vertical/Number=17.png",
      "/assets/img/vertical/Number=18.png",
    ],
    [
      "/assets/img/vertical/Number=27.png",
      "/assets/img/vertical/Number=28.png",
      "/assets/img/vertical/Number=29.png",
      "/assets/img/vertical/Number=30.png",
      "/assets/img/vertical/Number=9.png",
      "/assets/img/vertical/Number=8.png",
      "/assets/img/vertical/Number=21.png",
      "/assets/img/vertical/Number=22.png",
    ]
  ]

  const trendingSlides = [
    [
      "/assets/img/vertical/Number=20.png",
      "/assets/img/vertical/Number=10.png",
      "/assets/img/vertical/Number=14.png",
      "/assets/img/vertical/Number=11.png",
      "/assets/img/vertical/Number=13.png",
      "/assets/img/vertical/Number=1.png",
      "/assets/img/vertical/Number=12.png",
      "/assets/img/vertical/Number=19.png",
    ],
    [
      "/assets/img/vertical/Number=17.png",
      "/assets/img/vertical/Number=16.png",
      "/assets/img/vertical/Number=20.png",
      "/assets/img/vertical/Number=13.png",
      "/assets/img/vertical/Number=15.png",
      "/assets/img/vertical/Number=19.png",
      "/assets/img/vertical/Number=18.png",
      "/assets/img/vertical/Number=12.png",
    ],
    [
      "/assets/img/vertical/Number=18.png",
      "/assets/img/vertical/Number=25.png",
      "/assets/img/vertical/Number=22.png",
      "/assets/img/vertical/Number=23.png",
      "/assets/img/vertical/Number=26.png",
      "/assets/img/vertical/Number=17.png",
      "/assets/img/vertical/Number=24.png",
      "/assets/img/vertical/Number=21.png",
    ],
    [
      "/assets/img/vertical/Number=30.png",
      "/assets/img/vertical/Number=21.png",
      "/assets/img/vertical/Number=29.png",
      "/assets/img/vertical/Number=28.png",
      "/assets/img/vertical/Number=22.png",
      "/assets/img/vertical/Number=27.png",
      "/assets/img/vertical/Number=8.png",
      "/assets/img/vertical/Number=9.png",
    ]
  ]

  const newMoviesSlides = [
    [
      "/assets/img/vertical/Number=27.png",
      "/assets/img/vertical/Number=28.png",
      "/assets/img/vertical/Number=29.png",
      "/assets/img/vertical/Number=30.png",
      "/assets/img/vertical/Number=9.png",
      "/assets/img/vertical/Number=8.png",
      "/assets/img/vertical/Number=21.png",
      "/assets/img/vertical/Number=22.png",
    ],
    [
      "/assets/img/vertical/Number=21.png",
      "/assets/img/vertical/Number=22.png",
      "/assets/img/vertical/Number=23.png",
      "/assets/img/vertical/Number=24.png",
      "/assets/img/vertical/Number=25.png",
      "/assets/img/vertical/Number=26.png",
      "/assets/img/vertical/Number=17.png",
      "/assets/img/vertical/Number=18.png",
    ],
    [
      "/assets/img/vertical/Number=15.png",
      "/assets/img/vertical/Number=16.png",
      "/assets/img/vertical/Number=17.png",
      "/assets/img/vertical/Number=18.png",
      "/assets/img/vertical/Number=19.png",
      "/assets/img/vertical/Number=20.png",
      "/assets/img/vertical/Number=12.png",
      "/assets/img/vertical/Number=13.png",
    ],
    [
      "/assets/img/vertical/Number=1.png",
      "/assets/img/vertical/Number=10.png",
      "/assets/img/vertical/Number=11.png",
      "/assets/img/vertical/Number=12.png",
      "/assets/img/vertical/Number=13.png",
      "/assets/img/vertical/Number=14.png",
      "/assets/img/vertical/Number=19.png",
      "/assets/img/vertical/Number=20.png",
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