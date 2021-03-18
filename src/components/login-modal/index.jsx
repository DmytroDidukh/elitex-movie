import React, {useState} from 'react'
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormGroup,
    TextField,
    Typography
} from "@material-ui/core";

import useNewMovieFormStyles from "./styles";
import Modal from "../modal";
import LoginForm from "../login-form";

const LoginModal = ({
                       open,
                       handleClose,
                       shouldValidate,
                       titleValue,
                       onLogin,
                       beforeClose
                   }) => {

    const classes = useNewMovieFormStyles({shouldValidate, titleValue})

    return (
        <Modal
            open={open}
            handleClose={handleClose}>
            <DialogContent className={classes.dialog}>
                <LoginForm />
            </DialogContent>
            <DialogActions>
                <Button onClick={onLogin} variant="contained" color="primary" autoFocus>
                    Login
                </Button>
                <Button onClick={beforeClose} variant="contained" color="default">
                    Cancel
                </Button>
            </DialogActions>
        </Modal>
    )
}

export default LoginModal;
