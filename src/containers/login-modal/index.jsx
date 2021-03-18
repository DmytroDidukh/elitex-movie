import React, {useState} from 'react'

import LoginModalComponent from '../../components/login-modal'
import { useAuth } from "../../contexts/auth"

const LoginModalContainer = ({modalOpen, handleModalClose}) => {

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [error, setError] = useState('')

    const { login } = useAuth()

    const onLogin = async (e) => {
        e.preventDefault()

        try {
            setError('')
            await login(emailValue, passwordValue)
            handleModalClose()
        } catch {
            setError("Wrong email or password")
        }
    }

    return (
        <LoginModalComponent
            modalOpen={modalOpen}
            handleModalClose={handleModalClose}
            emailValue={emailValue}
            passwordValue={passwordValue}
            setEmailValue={setEmailValue}
            setPasswordValue={setPasswordValue}
            error={error}
            onLogin={onLogin}
        />
    )
}

export default LoginModalContainer;
