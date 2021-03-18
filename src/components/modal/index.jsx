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

import ModalStyles from "./styles";
import {saveMovie, uploadImage} from "../../db/api";
import MovieItem from "../movie-item";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import CardContent from "@material-ui/core/CardContent";

const Modal = ({open, handleClose, children}) => {
    const classes = ModalStyles()

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {children}
        </Dialog>
    )
}

export default Modal
