import React, {useRef, useState} from 'react'
import {
    Button,
    DialogActions,
    DialogContent,
} from "@material-ui/core";

import {useNewMovieFormStyles, useMovieItemDetailedStyles} from "./styles";
import MovieItem from "../movie-item";

import Modal from "../modal";

const MovieDetails = ({open, handleClose, movie}) => {
    const classes = useNewMovieFormStyles()

    return (
        <Modal
            open={open}
            handleClose={handleClose}
        >
            <DialogContent className={classes.dialog}>
                <MovieItem
                    movieData={movie}
                    useStyles={useMovieItemDetailedStyles}
                >
                    {
                        movie.description &&  <p>{movie.description}</p>
                    }
                </MovieItem>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="default">
                    Close
                </Button>
            </DialogActions>
        </Modal>
    )
}

export default MovieDetails
