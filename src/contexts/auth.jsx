import React, {useContext, useEffect, useState} from "react"
import ApiService from "../db/db"

const AuthContext = React.createContext()

export const useAuth =() => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const login = (email, password) => {
        return ApiService.auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        if (window.confirm('Logout?')) {
            return ApiService.auth.signOut()
        }
    }

    useEffect(() => {
        console.log(ApiService)
        return ApiService.auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
    }, [])

    const value = {
        currentUser,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
