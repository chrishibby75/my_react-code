import React, { Fragment, useState, useEffect, useCallback } from "react";
import MoviesList from "./component/MoviesList/MoviesList";
import AddMovie from "./component/AddMovie/AddMovie";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://react-http-86044-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const moviesArray = [];

      for (const key in data) {
        moviesArray.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        });
      }
      
       setMovies(moviesArray);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]); 

  // function fetchMoviesHandler() {
  //   fetch("https://swapi.dev/api/films/").then(response => {
  //     return response.json();
  //   }).then(data => {
  //     const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate:movieData.release_date
  //       }
  //     });
  //     setMovies(transformedMovies);
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }

  async function addMoviesHandler(movie) {
    const response = await fetch("https://react-http-86044-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
  }
  

  return (
    <Fragment>
      <section>
        <AddMovie onAddMovie={addMoviesHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <h2>No Content Available</h2>}
        {isLoading && <p>Please wait...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </Fragment>
  );
}

export default App;