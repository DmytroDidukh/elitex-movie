import React, {useState} from 'react'
import {
    Button,
    DialogActions,
    DialogContent,
    Typography,
} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert'

import Modal from "../modal";
import LoginForm from "../login-form";
import { useAuth } from "../../contexts/auth"

import useLoginModalStyles from "./styles";

const LoginModal = ({open, handleClose}) => {

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [error, setError] = useState('')

    const { login } = useAuth()

    const classes = useLoginModalStyles()

    const onLogin = async (e) => {
        e.preventDefault()

        try {
            setError('')
            await login(emailValue, passwordValue)
            handleClose()
        } catch {
            setError("Wrong email or password")
        }
    }

    return (
        <Modal
            open={open}
            handleClose={handleClose}>
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
                <Button onClick={onLogin} variant="contained" color="primary" autoFocus>
                    Login
                </Button>
                <Button onClick={handleClose} variant="contained" color="default">
                    Cancel
                </Button>
            </DialogActions>
        </Modal>
    )
}

export default LoginModal;
