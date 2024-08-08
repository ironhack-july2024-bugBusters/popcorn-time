import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import Header from "./components/Header"
import MovieList from "./components/MovieList"
import Footer from "./components/Footer"

import movies from "./data/movies.json";
import About from "./components/About";
import MovieDetails from "./components/MovieDetails";


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

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<MovieList moviesToDisplay={moviesToDisplay} callbackToDelete={deleteMovie} />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:movieId" element={<MovieDetails moviesToDisplay={moviesToDisplay} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer /> 

    </>
  )
}

export default App
