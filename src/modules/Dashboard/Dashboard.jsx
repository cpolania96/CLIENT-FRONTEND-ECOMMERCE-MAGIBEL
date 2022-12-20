import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function Dashboard() {
    const { logout } = useContext(AuthContext)
    return (
        <>
            <div>Dashboard</div>
            <button onClick={() => logout()}>logout</button>
        </>
    )
}

export default Dashboard