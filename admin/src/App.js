import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Manage_categories from './pages/Manage_categories'
import Add_categories from './pages/Add_categories'
import Manage_product from './pages/Manage_product'
import Add_product from './pages/Add_product'
import Manage_user from './pages/Manage_user'
import Edit_user from './pages/Edit_user'
import Manage_admin from './pages/Manage_admin'
import Manage_contact from './pages/Manage_contact'



function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
    <Routes>
    <Route index path="/" element={ <> <Login/> </> } ></Route>
                  <Route index path="/dashboard" element={ <> <Header/> <Dashboard/> <Footer/> </> } ></Route>
                  <Route index path="/add_category" element={ <> <Header/> <Add_categories/> <Footer/> </> } ></Route>
                  <Route index path="/manage_categories" element={<><Header/><Manage_categories/><Footer/></>}></Route>
                  <Route index path="/add_product" element={ <> <Header/> <Add_product/> <Footer/> </> } ></Route>
                  <Route index path="/manage_product" element={ <> <Header/> <Manage_product/> <Footer/> </> } ></Route>
                  <Route index path="/manage_user" element={ <> <Header/> <Manage_user/> <Footer/></>}></Route>
                  <Route index path="/edit_user/:id" element={ <> <Header/> <Edit_user/> <Footer/></>}></Route>
                  <Route index path="/manage_contact" element={ <> <Header/> <Manage_contact/> <Footer/></>}></Route>
                  <Route index path="/manage_admin" element={ <> <Header/><Manage_admin/> <Footer/></>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
