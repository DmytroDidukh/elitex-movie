import React, {useRef, useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {useMovieListStyles, useMovieItemListStyles} from "./styles";
import MovieItem from "../movie-item";
import MovieDetails from "../movie-details";

const MovieList = ({list}) => {
    const classes = useMovieListStyles()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(0)

    const handleCloseModal = () => setIsModalOpen(false)
    const handleMovieItemClick = (movieIndex) => {
        setIsModalOpen(true)
        setSelectedMovie(movieIndex)
    }

    return (
        <div className={classes.movieList}>
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
        </div>
    )
}

export default MovieList
