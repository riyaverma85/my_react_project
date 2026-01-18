import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Service from './pages/Service'
import SignUp from './Sign-up'
import Login from './pages/Login'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
        <Route path="/" element={<Layout/>}>
        <Route index element={<SignUp/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contect" element={<Contect/>}/>
        <Route path="service" element={<Service/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default App