
import MovieSummary from "./MovieSummary";


function MovieList (props) {

    return (
        <section className="MovieList">
            
            <h1>List of Movies</h1>

            {props.moviesToDisplay.map( (movieDetails) => {
                return (
                    <MovieSummary 
                        key={movieDetails.id} 
                        movieDetails={movieDetails}
                        callbackToDelete={props.callbackToDelete}
                    />
                );
            })}

        </section>
    );
}

export default MovieList;
