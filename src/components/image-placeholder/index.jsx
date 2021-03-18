import React, {useRef, useState} from 'react'
import {
    CircularProgress
} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';

import useImagePlaceholderStyles from "./styles";

const ImagePlaceholder = ({imageBase64Src, setImageBase64Src, shouldValidate, setImageFile}) => {
    const [imageLoading, setImageLoading] = useState(false)
    const inputRef = useRef(null)

    const classes = useImagePlaceholderStyles({imgSrc: imageBase64Src, shouldValidate})

    const onAddImage = (e) => {
        const file = e.target.files[0]

        if (!file.type.includes('image')) {
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

export default ImagePlaceholder
