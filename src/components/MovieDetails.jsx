import { Link, useParams } from "react-router-dom";

function MovieDetails(props) {

    const {movieId} = useParams();

    const movie = props.moviesToDisplay.find( (movieObj) => {
        return movieObj.id === parseInt(movieId);
    });

    return (
        <div className='MovieDetails'>
            <img src={movie.imgURL} alt="Movie poster" />
            <h3>{movie.title}</h3>
            <h2>{movie.year}</h2>
            <p>Rating: {movie.rating}</p>

            <p>
                <Link to="/">Back</Link>
            </p>
        </div>
    )
}

export default MovieDetails;