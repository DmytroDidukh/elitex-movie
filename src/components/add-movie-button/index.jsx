import React, {useState} from 'react'
import Button from "@material-ui/core/Button";

import NewMovieModal from "../new-movie-modal";
import LoginModal from "../login-modal";
import {useAuth} from "../../contexts/auth"

import useAddMovieBlock from "./styles";

const AddMovieButton = ({setMovies}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const {currentUser, logout} = useAuth()

    const classes = useAddMovieBlock()

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
                currentUser ? (
                    <>
                        <Button variant="contained"
                                color="secondary"
                                className={classes.button}
                                onClick={logout}>
                            Logout
                        </Button>
                        <NewMovieModal
                            open={isModalOpen}
                            handleClose={handleCloseModal}
                            setMovies={setMovies}
                        />
                    </>
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
