import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
// import motion from 'framer-motion'

function Login() {
    const { handleSubmit, handleChange } = useContext(AuthContext)

    return (
        <div className="container-login">
            <div className="box-login">
                <form
                    onSubmit={handleSubmit}>
                    <ul>
                        <li><h1>Magistral</h1></li>
                        <li><h2>Iniciar sesión</h2></li>
                        <li>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="userName"
                                placeholder='Usuario'
                            />
                        </li>
                        <li>
                            <input
                                onChange={handleChange}
                                type="password"
                                name="password"
                                placeholder='Contraseña'
                            />
                        </li>
                        <li>
                            <input type="submit" />
                            {/* <motion.input whileHover={{ scale: 1.2 }} /> */}
                        </li>
                        <li><h4>Olvidé mi contraseña</h4></li>
                    </ul>
                </form>
            </div>
        </div >
    )
}

export default Login