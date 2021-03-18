import React, {useState} from 'react'
import {
    Button,
    DialogActions, DialogContent,
    FormGroup,
    TextField,
    Typography
} from "@material-ui/core";

import useLoginFormStyles from "./styles";

const LoginForm = ({
                       open,
                       handleClose,
                       shouldValidate,
                       emailValue,
                       titleValue,
                       passwordValue,
                       setEmailValue,
                       setPasswordValue,
                       onLogin,
                       beforeClose
                   }) => {

    const classes = useLoginFormStyles({shouldValidate, titleValue})

    return (
        <div className={classes.loginFormInputs}>
            <FormGroup>
                <TextField title='Email'
                           placeholder='Enter email...'
                           type='email'
                           fullWidth
                           error={shouldValidate && !emailValue}
                           helperText={shouldValidate && !emailValue ? "Invalid title" : ''}
                           onChange={(e) => setEmailValue(e.target.value)}
                           value={titleValue}/>
            </FormGroup>
            <FormGroup className={classes.input}>
                <TextField
                    title='Password'
                    fullWidth
                    type='password'
                    placeholder='Enter password...'
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                />
            </FormGroup>
        </div>
    )
}

export default LoginForm;
