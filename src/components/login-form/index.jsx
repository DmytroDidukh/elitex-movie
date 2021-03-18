import React from 'react'
import {
    FormGroup,
    TextField,
} from "@material-ui/core";

import useLoginFormStyles from "./styles";

const LoginForm = ({
                       emailValue,
                       passwordValue,
                       error,
                       setEmailValue,
                       setPasswordValue,
                   }) => {

    const classes = useLoginFormStyles()

    return (
        <div className={classes.loginFormInputs}>
            <FormGroup>
                <TextField
                    value={emailValue}
                    onChange={({target}) => setEmailValue(target.value)}
                    placeholder='Enter email...'
                    type='email'
                    fullWidth
                    error={!!error}
                    className={classes.input}
                    label="Email"
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    value={passwordValue}
                    onChange={({target}) => setPasswordValue(target.value)}
                    fullWidth
                    type='password'
                    placeholder='Enter password...'
                    error={!!error}
                    className={classes.input}
                    label="Password"
                />
            </FormGroup>
        </div>
    )
}

export default LoginForm;
