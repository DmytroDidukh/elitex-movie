import React, {useRef, Fragment, useState, useEffect} from "react";
import Button from "@material-ui/core/Button";

import {uploadImage, saveMovie, getMovies} from "./db/api";
import './App.css';
import AddMovie from "./components/add-movie";
import MovieList from "./components/movie-list";

const App = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async () => {
            const movies = await getMovies()
            setMovies(movies)
        })()
    }, [])


  return (
    <div className="App">
        <AddMovie setMovies={setMovies}/>
        <MovieList list={movies}/>
    </div>
  );
}

export default App;
