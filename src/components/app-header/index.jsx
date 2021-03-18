import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import NewMovieModal from "../new-movie-modal";
import LoginModal from "../login-modal";
import {useAuth} from "../../contexts/auth"

import useAppHeaderStyles from "./styles";

const AppHeader = ({setMovies}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const {currentUser, logout} = useAuth()

    const classes = useAppHeaderStyles()

    const handleOpenModal = () => setIsModalOpen(true)
    const handleCloseModal = () => setIsModalOpen(false)

    return (
        <section className={classes.appHeader}>
            <Button variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleOpenModal}>
                <AddIcon/>
            </Button>
            {
                currentUser ? (
                    <>
                        <Button variant="contained"
                                color="secondary"
                                className={classes.button}
                                onClick={logout}>
                            <ExitToAppIcon />
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

export default AppHeader
