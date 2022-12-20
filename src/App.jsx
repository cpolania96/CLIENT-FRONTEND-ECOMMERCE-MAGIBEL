import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './modules/Login/Login.jsx'
import ProtectedRoutes from './modules/ProtectedRoutes/ProtectedRoutes'
import { AuthContextProvider } from './context/AuthContext'
import Dashboard from './modules/Dashboard/Dashboard'

function App() {
  return (
    <div className='container-app'>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes> 
            <Route index path='/' element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route exact path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
