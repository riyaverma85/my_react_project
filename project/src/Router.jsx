import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Service from './pages/Service'
import SignUp from './SignUp'
import Login from './Login'
import MovieDetails from './pages/MovieDetails'
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
        <Route path="movie/:type" element={<MovieDetails/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App