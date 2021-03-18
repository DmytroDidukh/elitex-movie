import React, {useState} from 'react'

import MovieItem from "../movie-item";
import MovieDetails from "../movie-details";
import ApiService from "../../db/api";

import {useMovieListStyles, useMovieItemListStyles} from "./styles";


const MovieList = ({list, setList}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(0)

    const classes = useMovieListStyles()

    const deleteMovie = (id) => {
        if (window.confirm('Really want to delete this movie?')) {
            const newList = list.filter(item => item.id !== id)
            setList(newList)
            ApiService.deleteMovieFromDb(id)
            handleCloseModal()
        }
    }

    const handleCloseModal = () => setIsModalOpen(false)
    const handleMovieItemClick = (movieIndex) => {
        setIsModalOpen(true)
        setSelectedMovie(movieIndex)
    }

    return (
        <section className={classes.movieList}>
            {
                list.map((item, i) => (
                    <MovieItem key={item.id + i}
                               movieIndex={i}
                               movieData={item}
                               handleClick={handleMovieItemClick}
                               useStyles={useMovieItemListStyles}/>
                ))
            }
            {
                !!list.length &&
                <MovieDetails open={isModalOpen}
                              handleClose={handleCloseModal}
                              movie={list[selectedMovie]}
                              deleteMovie={deleteMovie}/>
            }
        </section>
    )
}

export default MovieList
