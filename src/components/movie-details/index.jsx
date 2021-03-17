import React, {useRef, useState} from 'react'
import {
    Button,
    Typography,
    FormGroup,
    DialogActions,
    TextField,
    DialogContent,
    Dialog,
    CircularProgress
} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import NewMovieFormStyles from "./styles";
import {saveMovie, uploadImage} from "../../db/api";
import MovieItem from "../movie-item";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import CardContent from "@material-ui/core/CardContent";

const MovieDetails = ({open, handleClose, movie}) => {

    const classes = NewMovieFormStyles()


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent className={classes.dialog}>
                <div className={}>


                    {movie.description && <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Description:</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {movie.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>}
                </div>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="default"
                        autoFocus fullWidth>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default MovieDetails
