// eslint-disable-next-line no-unused-vars
import React from 'react'
import Headers from './Components/Headers'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
import AddProduct from './Components/AddProduct.jsx';



const App = () => {
  return (
    <div>

      <Headers />
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/AddProduct' element={<AddProduct />} />
      </Routes>
    </div>
  )
}

export default App