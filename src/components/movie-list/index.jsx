import React, {useState} from 'react'

import MovieItem from "../movie-item";
import MovieDetails from "../movie-details";

import {useMovieListStyles, useMovieItemListStyles} from "./styles";

const MovieList = ({list}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(0)

    const classes = useMovieListStyles()

    const handleCloseModal = () => setIsModalOpen(false)
    const handleMovieItemClick = (movieIndex) => {
        setIsModalOpen(true)
        setSelectedMovie(movieIndex)
    }

    return (
        <section className={classes.movieList}>
            {
                list.map((item, i) => (
                    <MovieItem key={item.title}
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
                              movie={list[selectedMovie]}/>
            }
        </section>
    )
}

export default MovieList
