
function Movie(props) {
    return (
        <div className="card">
            <img src={props.movieDetails.imgURL} alt="Movie poster" />
            <h3>{props.movieDetails.title}</h3>
            <p>Year: {props.movieDetails.year}</p>
            <p>Rating: {props.movieDetails.rating}</p>

            <p>
                <button onClick={() => { props.callbackToDelete(props.movieDetails.id) }}>Delete</button>
            </p>
        </div>
    );
}

export default Movie;