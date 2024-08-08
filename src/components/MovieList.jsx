import { useState } from "react";
import movies from "../data/movies.json";
import Movie from "./Movie";


function MovieList () {

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter( (element) => {
            return movieId !== element.id;
        });

        // moviesToDisplay = newList;  // NEVER, NEVER modify state directly

        setMoviesToDisplay(newList);
    }

    return (
        <section className="MovieList">
            
            <h1>List of Movies</h1>
            <h2>Number of movies: {moviesToDisplay.length}</h2>

            {moviesToDisplay.map( (movieDetails) => {
                return (
                    <Movie 
                        key={movieDetails.id} 
                        movieDetails={movieDetails}
                        callbackToDelete={deleteMovie}
                    />
                );
            })}

        </section>
    );
}

export default MovieList;
