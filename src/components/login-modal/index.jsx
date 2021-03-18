import React from 'react'
import {
    Button,
    DialogActions,
    DialogContent,
    Typography,
} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert'

import Modal from "../modal";
import LoginForm from "../login-form";

import useLoginModalStyles from "./styles";

const LoginModalComponent = ({
                        modalOpen,
                        handleModalClose,
                        emailValue,
                        passwordValue,
                        setEmailValue,
                        setPasswordValue,
                        error,
                        onLogin,
                    }) => {

    const classes = useLoginModalStyles()

    return (
        <Modal
            open={modalOpen}
            handleClose={handleModalClose}>
            <DialogContent>
                <div className={classes.header}>
                    <Typography variant='h6'>Login</Typography>
                    <span>*Only registered user can add movie. Please, login.</span>
                </div>
                <LoginForm
                    emailValue={emailValue}
                    passwordValue={passwordValue}
                    setEmailValue={setEmailValue}
                    setPasswordValue={setPasswordValue}
                    error={error}
                />
                {error && <Alert severity="error">{error}</Alert>}
            </DialogContent>
            <DialogActions>
                <Button onClick={onLogin}
                        variant="contained"
                        color="primary"
                        autoFocus>
                    Login
                </Button>
                <Button onClick={handleModalClose}
                        variant="contained"
                        color="default">
                    Cancel
                </Button>
            </DialogActions>
        </Modal>
    )
}

export default LoginModalComponent;
