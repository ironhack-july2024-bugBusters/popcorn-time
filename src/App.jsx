import { useState } from "react";

import Header from "./components/Header"
import MovieList from "./components/MovieList"
import Footer from "./components/Footer"

import movies from "./data/movies.json";

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((element) => {
      return movieId !== element.id;
    });

    // moviesToDisplay = newList;  // NEVER, NEVER modify state directly

    setMoviesToDisplay(newList);
  }

  return (
    <>
      
      <Header numberOfMovies={moviesToDisplay.length} />

      <MovieList moviesToDisplay={moviesToDisplay} callbackToDelete={deleteMovie} />

      <Footer />

    </>
  )
}

export default App
