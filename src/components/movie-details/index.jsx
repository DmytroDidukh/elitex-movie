import React from 'react'
import {
    Button,
    DialogActions,
    DialogContent,
} from "@material-ui/core";

import {useMovieItemDetailedStyles} from "./styles";
import MovieItem from "../movie-item";

import Modal from "../modal";

const MovieDetails = ({open, handleClose, movie}) => {
    return (
        <Modal
            open={open}
            handleClose={handleClose}
        >
            <DialogContent>
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
