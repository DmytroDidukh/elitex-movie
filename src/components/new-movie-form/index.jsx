import React, {useState} from 'react'
import {
    FormGroup,
    TextField,
    Typography
} from "@material-ui/core";

import ImagePlaceholder from "../../components/image-placeholder";

import useNewMovieFormStyles from "./styles";

const NewMovieForm = ({
                          shouldValidate,
                          imageFile,
                          titleValue,
                          descriptionValue,
                          setImageFile,
                          setTitleValue,
                          setDescriptionValue
                      }) => {
    const [imageBase64Src, setImageBase64Src] = useState('')

    const classes = useNewMovieFormStyles({shouldValidate, titleValue})

    return (
        <div className={classes.movieForm}>
            <ImagePlaceholder
                imageBase64Src={imageBase64Src}
                setImageBase64Src={setImageBase64Src}
                shouldValidate={shouldValidate}
                imageFile={imageFile}
                setImageFile={setImageFile}
            />
            <div className={classes.movieFormInputs}>
                <FormGroup >
                    <Typography variant='body2'
                                className={classes.inputTitle}>*Title: </Typography>
                    <TextField placeholder='Enter movie title...'
                               type='text'
                               fullWidth
                               error={shouldValidate && !titleValue}
                               helperText={shouldValidate && !titleValue ? "Invalid title" : ''}
                               onChange={(e) => setTitleValue(e.target.value)}
                               value={titleValue}/>
                </FormGroup>
                <FormGroup className={classes.input}>
                    <Typography variant='body2'>Description: </Typography>
                    <TextField
                        multiline
                        fullWidth
                        rows={4}
                        placeholder='Enter movie description...'
                        value={descriptionValue}
                        onChange={(e) => setDescriptionValue(e.target.value)}
                    />
                </FormGroup>
            </div>
        </div>
    )
}

export default NewMovieForm;
