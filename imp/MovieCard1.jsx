import '../css/MovieCard.css'


// {movie} is a prop 
function MovieCard({movie}){

    function onFavouriteClick(){
        alert("clicked")
    }

    return (
    <div className="Movie-card">
        <div className="Movie-poster">
            
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>

            <div className="movie-overlay">
                <button className="favourite-btn" onClick={onFavouriteClick}>
                    🤍
                </button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>

    );

}

export default MovieCard