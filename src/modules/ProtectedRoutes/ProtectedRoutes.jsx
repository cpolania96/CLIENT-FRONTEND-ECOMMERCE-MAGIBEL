import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function ProtectedRoutes({ children, redirectTo = '/' }) {
    const token = localStorage.getItem('token')
    if (!token) {
        return <Navigate to={redirectTo} />
    }

    return children ? children : <Outlet />
}

export default ProtectedRoutes