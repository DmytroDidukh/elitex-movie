import React, {useState} from 'react'
import {
    Button,
    Typography,
    FormGroup,
    DialogActions,
    TextField,
    DialogContent,
} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

import useNewMovieFormStyles from "./styles";
import {saveMovie, uploadImage} from "../../db/api";
import Modal from "../modal";
import ImagePlaceholder from "../image-placeholder";

const NewMovieForm = ({open, handleClose, setMovies}) => {
    const [imageBase64Src, setImageBase64Src] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [shouldValidate, setShouldValidate] = useState(false)

    const classes = useNewMovieFormStyles()

    const handleSubmit = async () => {
        if (!titleValue.trim() || !imageFile) {
            setShouldValidate(true)
            return
        }

        const src = await uploadImage(imageFile, imageFile.name)
        const newMovie = {
            title: titleValue,
            description: descriptionValue,
            image: src,
            created: Date.now()
        }

        setMovies(prev => [newMovie, ...prev])
        saveMovie(newMovie)

        setShouldValidate(false)
        setTitleValue('')
        setDescriptionValue('')
        setImageFile(null)
        setImageBase64Src('')
        handleClose()
    }

    return (
        <Modal
            open={open}
            handleClose={handleClose}
        >
            <DialogContent className={classes.dialog}>
                <ClearIcon className={classes.closeIcon} onClick={handleClose}/>
                <Typography variant="h6">Add your movie...</Typography>
                <div className={classes.movieForm}>
                    <ImagePlaceholder
                        imageBase64Src={imageBase64Src}
                        setImageBase64Src={setImageBase64Src}
                        shouldValidate={shouldValidate}
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                    />
                    <FormGroup className={classes.dialogForm}>
                        <TextField label="*Title"
                                   type='text'
                                   error={shouldValidate && !titleValue}
                                   id="standard-error-helper-text"
                                   helperText={shouldValidate && !titleValue ? "Invalid title" : ''}
                                   onChange={(e) => setTitleValue(e.target.value)}
                                   value={titleValue}
                                   className={classes.dialogInput}/>
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            placeholder='Enter description'
                            variant="outlined"
                            value={descriptionValue}
                            onChange={(e) => setDescriptionValue(e.target.value)}
                        />
                    </FormGroup>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} variant="contained" color="primary" autoFocus>
                    Add
                </Button>
                <Button onClick={handleClose} variant="contained" color="default">
                    Cancel
                </Button>
            </DialogActions>
        </Modal>
    )
}

export default NewMovieForm
