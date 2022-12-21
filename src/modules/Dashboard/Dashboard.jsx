import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SellIcon from '@mui/icons-material/Sell';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import InventoryIcon from '@mui/icons-material/Inventory';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom'
import Sales from './Sales/Sales';
import { Avatar } from '@mui/material';
import CardUser from './User/CardUser';
import Logo from '../../assets/Logo.jsx'

function Dashboard({ children }) {
    const { logout } = useContext(AuthContext)
    const menuList = [
        {
            id: '0',
            title: 'Dashboard',
            icon: <DashboardIcon style={{ color: 'white' }} />,
            navTo: '/dashboard'
        },
        {
            id: '1',
            title: 'Ventas',
            icon: <SellIcon style={{ color: 'white' }} />,
            navTo: '/ventas'
        },
        {
            id: '2',
            title: 'Clientes',
            icon: <PersonPinIcon style={{ color: 'white' }} />,
            navTo: '/clientes'
        },
        {
            id: '3',
            title: 'Inventario',
            icon: <InventoryIcon style={{ color: 'white' }} />,
            navTo: '/inventario'
        },
        {
            id: '4',
            title: 'Productos',
            icon: <QrCodeIcon style={{ color: 'white' }} />,
            navTo: '/productos'
        },

    ]
    return (
        <div className='dashboard-container'>
            <div className="dashboard">
                <div className="navbar">
                    <div className="logo">
                        <div><Logo /></div>
                        <h2>Punto de venta</h2>
                    </div>
                    <nav>
                        <ul>
                            {menuList.map(item => (
                                <li key={item.id}>
                                    <Link to={item.navTo}>
                                        <div className='ico'>
                                            {item.icon}
                                        </div>
                                        <h3 className='title'>
                                            {item.title}
                                        </h3>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        className='logout'
                        onClick={() => logout()}
                    >Cerrar sesión</button>
                </div>
                <div className='container-content'>
                    <div className="container-header">
                        <CardUser />
                    </div>
                    {children ? children : <Outlet />}
                </div>
            </div>
        </div>
    )
}

export default Dashboard