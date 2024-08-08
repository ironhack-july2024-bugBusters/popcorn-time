import "./Header.css";


function Header(props) {
    return (
        <header className="Header">
             <h1>🍿 Popcorn Time! 🍿</h1>
             <h2>Number of movies: {props.numberOfMovies}</h2>
        </header>
    )
}

export default Header;
