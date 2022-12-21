import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './modules/Login/Login.jsx'
import ProtectedRoutes from './modules/ProtectedRoutes/ProtectedRoutes'
import { AuthContextProvider } from './context/AuthContext'
import Dashboard from './modules/Dashboard/Dashboard'
import Sales from './modules/Dashboard/Sales/Sales'
import DashboardIndex from './modules/Dashboard/Index/DashboardIndex'
import Customers from './modules/Dashboard/Customers/Customers'
import Inventory from './modules/Dashboard/Inventory/Inventory'
import Products from './modules/Dashboard/Products.jsx/Products'
function App() {
  return (
    <div className='container-app'>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route index path='/' element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route element={<Dashboard />}>
                <Route exact path='/dashboard' element={<DashboardIndex />} />
                <Route exact path='/ventas' element={<Sales />} />
                <Route exact path='/clientes' element={<Customers />} />
                <Route exact path='/inventario' element={<Inventory />} />
                <Route exact path='/productos' element={<Products />} />
              </Route>
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
