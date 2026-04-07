import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import {Toaster} from 'react-hot-toast'
import DashboardComponent from './components/DashboardComponent/DashboardComponent'
import LoginPage from './pages/LoginPage/LoginPage'
import AddPage from './pages/AddPage/AddPage'
import OrdersPage from './pages/OrdersPage/OrdersPage'
import UsersPage from './pages/UsersPage/UsersPage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavbarComponent/>
    <Toaster/>
    <Routes>
      <Route path='/' element={<DashboardComponent/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/add' element={<AddPage/>}></Route>
      <Route path='/orders' element={<OrdersPage/>}></Route>
      <Route path='/users' element={<UsersPage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App