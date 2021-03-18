import React, {useState, useEffect} from "react";
import {CircularProgress} from "@material-ui/core";

import AddMovieButton from "./components/add-movie-button";
import MovieList from "./components/movie-list";
import {getMovies} from "./db/api";

import './App.css';

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
                <MovieList list={movies} setList={setMovies}/>
            )
        }
    </div>
  );
}

export default App;
