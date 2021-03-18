import React, {useState} from 'react'
import {
    FormGroup,
    TextField,
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

    const classes = useNewMovieFormStyles()

    return (
        <div className={classes.movieForm}>
            <ImagePlaceholder
                imageBase64Src={imageBase64Src}
                setImageBase64Src={setImageBase64Src}
                shouldValidate={shouldValidate}
                imageFile={imageFile}
                setImageFile={setImageFile}
            />
            <FormGroup className={classes.movieFormInputs}>
                <TextField label="*Title"
                           type='text'
                           error={shouldValidate && !titleValue}
                           id="standard-error-helper-text"
                           helperText={shouldValidate && !titleValue ? "Invalid title" : ''}
                           onChange={(e) => setTitleValue(e.target.value)}
                           value={titleValue}
                           className={classes.input}/>
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    placeholder='Enter description'
                    variant="outlined"
                    value={descriptionValue}
                    className={classes.input}
                    onChange={(e) => setDescriptionValue(e.target.value)}
                />
            </FormGroup>
        </div>
    )
}

export default NewMovieForm;
