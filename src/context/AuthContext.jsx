import React, { createContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    let [userData, setUserData] = useState({
        name: '',
        token: '',
        role: ''
    })
    let navigate = useNavigate()
    const [infoUser, setInfoUser] = useState({ 
        userName: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const URL = 'http://localhost:9090/api/user/login'
        let info = infoUser
        axios
            .post(URL, info)
            .then(info => {
                Swal.fire({
                    title: info.data.message,
                })
                setInfoUser({
                    userName: '',
                    password: ''
                })
                localStorage.setItem('token', info.data.token)
                navigate('/dashboard')
            }).catch(err => {
                Swal.fire({
                    title: err.response.data.message
                })
            })

    }
    console.log();
    const handleChange = (e) => {
        const { name, value } = e.target
        setInfoUser({
            ...infoUser,
            [name]: value
        })
    }

    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <AuthContext.Provider
            value={{
                handleSubmit,
                handleChange,
                userData,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}
