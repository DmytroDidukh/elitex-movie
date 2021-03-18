import React, {useState} from 'react'

import Button from "@material-ui/core/Button";
import NewMovieModal from "../new-movie-modal";

import useAddMovieBlock from "./styles";
import LoginModal from "../login-modal";

const AddMovieButton = ({setMovies, isLogged, setIsLogged}) => {
    const classes = useAddMovieBlock()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => setIsModalOpen(true)
    const handleCloseModal = () => setIsModalOpen(false)

    return (
        <section className={classes.addMovieBlock}>
            <Button variant="contained"
                    color="primary"
                    onClick={handleOpenModal}>
                Add movie
            </Button>
            {
                isLogged ? (
                    <NewMovieModal
                        open={isModalOpen}
                        handleClose={handleCloseModal}
                        setMovies={setMovies}
                    />
                ) : (
                    <LoginModal
                        open={isModalOpen}
                        handleClose={handleCloseModal}
                    />
                )
            }

        </section>
    )
}

export default AddMovieButton
