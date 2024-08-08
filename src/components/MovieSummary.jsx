import { Link } from "react-router-dom";

function MovieSummary(props) {
    return (
        <div className="card">
            <h3>{props.movieDetails.title}</h3>
            <p>Year: {props.movieDetails.year}</p>
            
            <p>
                <button onClick={() => { props.callbackToDelete(props.movieDetails.id) }}>Delete</button>
                <Link to={`/movies/${props.movieDetails.id}`}>More Details</Link>
            </p>
        </div>
    );
}

export default MovieSummary;