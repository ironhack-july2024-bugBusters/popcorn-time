import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import Header from "./components/Header"
import About from "./components/About";
import MovieList from "./components/MovieList"
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";
import Footer from "./components/Footer"

import movies from "./data/movies.json";


function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


  const createMovie = (movieDetails) => {
    
    // find out id for the movie that we want to add
    const movieIds = moviesToDisplay.map((movie) => movie.id);
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1;

    const newMovie = {
      ...movieDetails,
      id: nextId
    }

    const newList = [newMovie, ...moviesToDisplay];
    setMoviesToDisplay(newList);

  }

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((element) => {
      return movieId !== element.id;
    });

    setMoviesToDisplay(newList);
  }


  return (
    <>

      <Header numberOfMovies={moviesToDisplay.length} />

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <AddMovie callbackToCreate={createMovie} />

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
