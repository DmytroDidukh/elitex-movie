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

const NewMovieForm = ({open, handleClose}) => {
    const [imageBase64Src, setImageBase64Src] = useState('')
    const [imageLoading, setImageLoading] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [shouldValidate, setShouldValidate] = useState(false)

    const inputRef = useRef(null)

    const classes = NewMovieFormStyles({imgSrc: imageBase64Src})

    const onAddImage = (e) => {
        e.preventDefault()

        const file = e.target.files[0]

        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            console.log('wrong file')
            return
        }

        setImageLoading(true)
        setImageFile(file)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageBase64Src(reader.result)
            setImageLoading(false)
        };
    }

    const handleSubmit = async () => {
        if (!titleValue.trim() || !imageFile) {
            setShouldValidate(true)
            return
        }

        const src = await uploadImage(imageFile, imageFile.name)
        saveMovie({
            title: titleValue,
            description: descriptionValue,
            image: src
        })

        setShouldValidate(false)
        setTitleValue('')
        setDescriptionValue('')
        setImageFile(null)
        setImageBase64Src('')
        handleClose()
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent className={classes.dialog}>
                <ClearIcon className={classes.closeIcon} onClick={handleClose}/>
                <Typography variant="h6">What is your movie?</Typography>
                <div className={classes.movieForm}>
                    <div className={classes.imgPlaceholder}
                         style={{borderColor: shouldValidate && !imageFile ? 'red': 'black'}}
                         onClick={() => inputRef.current.click()}>
                        {imageBase64Src ? (
                            imageLoading ? (
                                <CircularProgress/>
                            ) : (
                                <div style={{backgroundImage: imageBase64Src}} className='imageBlock'/>
                            )
                        ) : (
                            <>
                                <AddCircleIcon/>
                                <p>Натисніть для завантаження</p>
                            </>
                        )}
                        <input
                            className={classes.uploadInput}
                            ref={inputRef}
                            type='file'
                            onChange={onAddImage}
                        />
                    </div>
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
                <Button onClick={handleSubmit} variant="contained" color="primary"
                        autoFocus fullWidth>
                    Add
                </Button>
                <Button onClick={handleClose} variant="contained" color="default"
                        autoFocus fullWidth>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default NewMovieForm
