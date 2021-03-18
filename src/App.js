import React, {useState, useEffect} from "react";
import {CircularProgress} from "@material-ui/core";

import AppHeader from "./components/app-header";
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

    if (listLoading) {
        return <CircularProgress className='circular-progress'/>
    }

    return (
        <div className="app">
            <AppHeader setMovies={setMovies}/>
            <MovieList list={movies} setList={setMovies}/>
        </div>
    );
}

export default App;
