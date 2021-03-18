import React, {useRef} from 'react'
import {
    CircularProgress
} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';

import useImagePlaceholderStyles from "./styles";

const ImagePlaceholderComponent = ({imageBase64Src, imageLoading, onAddImage, shouldValidate}) => {
    const inputRef = useRef(null)

    const classes = useImagePlaceholderStyles({imgSrc: imageBase64Src, shouldValidate})

    return (
        <div className={classes.imgPlaceholder}
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
    )
}

export default ImagePlaceholderComponent
