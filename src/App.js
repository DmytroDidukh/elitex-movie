import React, {useState, useEffect} from "react";

import {getMovies} from "./db/api";
import './App.css';
import AddMovieButton from "./components/add-movie-button";
import MovieList from "./components/movie-list";
import {CircularProgress} from "@material-ui/core";

const App = () => {
    const [movies, setMovies] = useState([])
    const [listLoading, setListLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const movies = await getMovies()
            setMovies(movies)
            setListLoading(false)
        })()
    }, [])


  return (
    <div className="App">
        <AddMovieButton setMovies={setMovies}/>
        {
            listLoading ? (
                <CircularProgress className='circular-progress'/>
            ) : (
                <MovieList list={movies}/>
            )
        }
    </div>
  );
}

export default App;
