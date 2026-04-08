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
  const token=localStorage.getItem("admin-token");
  
  return (
    <>
    <BrowserRouter>
    {token ? <NavbarComponent/>:""}
    <Toaster/>
    <Routes>
      <Route path='/' element={token?<DashboardComponent/>:<LoginPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/add' element={token?<AddPage/>:<LoginPage/>}></Route>
      <Route path='/orders' element={token?<OrdersPage/>:<LoginPage/>}></Route>
      <Route path='/users' element={token?<UsersPage/>:<LoginPage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
  
}

export default App