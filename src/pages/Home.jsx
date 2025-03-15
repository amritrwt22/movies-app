import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  //searchquery defines a state ,setsearchquery is function to update the state
  //anytime we update the state the "return" component will re-render itself and update
  //based on this state change and will display the change on home page
  //basically show us movie based on name we searched for
  //this helps to persist state during re-render so it doesnt reset to original value
  //only persist till page is reloaded
  const [searchQuery, setSearchQuery] = useState("");
  //anytime we update the movie list ,it will auto re-render component for us
  //will use store movies in states so they persist
  const [movies, setMovies] = useState([]);
  /***when ur loading something from API  - set up 2 variables
    1) stores loading state if we are currently loading data
    2) store any error occured when calling the api
  */
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
//useEffect - allows to add side effects to fn/comp. and define when they should run
    // const movies = [
    //     { id: 1, title: "John Wick", release_date: "2020" } ,
    //     { id: 2, title: "Terminator", release_date: "1999" } , 
    //     { id: 3, title: "The Matrix", release_date: "1998" } ,
    // ];
  //problem with this is whenever u have change in any comp of home page , the page will rerender
  //and this will call this fn again n agaian to solve this problem useeffect helps -
    

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);
  //[] is dependancy array , () => {} this is function which will be called when [] arr changes
    //whatever we put in [] ,we will check after every re-render and if its changed from before
    //we will run this useEffect ()=>{} .
    //when any state change occur , useEffect wont run as that state isnt in [] dependancy arr.
    //useful becz if some state changes and u want to run useEffect again ,
    //so put state change in []
  //
 
  
  //will use searchMovie API function to search for movies
  const handleSearch = async (e) => {
    //on submitting the page refreshes to default ,lets stop that
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return  //this dont allow us to search for something else while loading search

    setLoading(true)
    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    } catch (err) {
        console.log(err)
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
{/* if there is an error ,show it */}
        {error && <div className="error-message">{error}</div>}
{/* conditional rendering ,if we are loading we will display loading... else display movies*/}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">

          {/*  - using map function to iterate over movies using variable movie , and call Moviecard
          component for eaxh movie
          - its like for(auto movie:movies)  - all movies will be shown in a grid (row)
           ....
          //movies.map( (movie) => ( < MovieCard movie={movie} key={movie.id} /> ))
          //this shows all the movies
          //now letsee how state can be used to show different values inside component
          //means only show movie if title matches to search - conditional rendering
          // movies.map( (movie) => (
          //     movie.title.toLowerCase().startsWith(searchQuery) && 
          //         ( < MovieCard movie={movie} key={movie.id} /> )
          //     )
          // )
          //we will be using API for conditional rendering 
          */}

          {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
        </div>
      )}
    </div>
  );
}

export default Home;
