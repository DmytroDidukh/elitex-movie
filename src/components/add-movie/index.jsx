import React, {useState} from 'react'

import Button from "@material-ui/core/Button";
import NewMovieForm from "../new-movie-form";

import useAddMovieBlock from "./styles";

const AddMovieBlock = ({setMovies}) => {
    const classes = useAddMovieBlock()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => setIsModalOpen(true)
    const handleCloseModal = () => setIsModalOpen(false)

    return (
        <div className={classes.addMovieBlock}>
            <Button variant="contained"
                    color="primary"
                    onClick={handleOpenModal}>
                Add movie
            </Button>
            <NewMovieForm
                open={isModalOpen}
                handleClose={handleCloseModal}
                setMovies={setMovies}
            />
        </div>
    )
}

export default AddMovieBlock
