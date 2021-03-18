import React, {useState} from 'react'
import {
    Button,
    Typography,
    DialogActions,
    DialogContent,
} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

import Modal from "../modal";
import NewMovieForm from "../new-movie-form";
import ApiService from "../../db/api";

import useNewMovieFormStyles from "./styles";

const NewMovieModal = ({open, handleClose, setMovies}) => {
    const [imageFile, setImageFile] = useState(null)
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [shouldValidate, setShouldValidate] = useState(false)

    const classes = useNewMovieFormStyles()

    const afterSubmit = () => {
        setShouldValidate(false)
        setTitleValue('')
        setDescriptionValue('')
        setImageFile(null)
        handleClose()
    }

    const beforeClose = () => {
        setShouldValidate(false)
        handleClose()
    }

    const onSubmit = async () => {
        if (!titleValue.trim() || !imageFile) {
            setShouldValidate(true)
            return
        }

        const src = await ApiService.uploadImage(imageFile, imageFile.name)
        const newMovie = {
            title: titleValue,
            description: descriptionValue,
            image: src,
            created: Date.now()
        }

        setMovies(prev => [newMovie, ...prev])
        ApiService.saveMovieToDb(newMovie)

        afterSubmit()
    }

    return (
        <Modal
            open={open}
            handleClose={handleClose}
        >
            <DialogContent className={classes.dialog}>
                <ClearIcon className={classes.closeIcon}
                           onClick={beforeClose}/>
                <Typography variant="h6">Add your movie...</Typography>
                <NewMovieForm
                    shouldValidate={shouldValidate}
                    imageFile={imageFile}
                    titleValue={titleValue}
                    descriptionValue={descriptionValue}
                    setImageFile={setImageFile}
                    setTitleValue={setTitleValue}
                    setDescriptionValue={setDescriptionValue}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onSubmit}
                        variant="contained"
                        color="primary"
                        autoFocus>
                    Add
                </Button>
                <Button onClick={beforeClose}
                        variant="contained"
                        color="default">
                    Cancel
                </Button>
            </DialogActions>
        </Modal>
    )
}

export default NewMovieModal;
