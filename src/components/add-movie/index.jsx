import React, {Fragment, useRef, useState} from 'react'


import {uploadImage} from "../../db/api";
import uploadStyles from "./styles";
import Button from "@material-ui/core/Button";
import NewMovieForm from "../new-movie-form";

const AddMovie = ({open, handleClose}) => {
    const classes = uploadStyles()

    const inputRef = useRef(null)
    const [imgUrl, setImgUrl] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        //inputRef.current.click()
        setIsModalOpen(true)
    }
    const handleCloseModal = () => setIsModalOpen(false)

    return (
        <div>
            <Button variant="contained"
                    color="primary"
                    onClick={handleOpenModal}>
                Add movie
            </Button>
            <NewMovieForm
                open={isModalOpen}
                handleClose={handleCloseModal}
            />
        </div>
    )
}

export default AddMovie
