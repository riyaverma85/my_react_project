import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import SignUp from './SignUp'
import Login from './Login'
import MovieDetails from './pages/MovieDetails'
import Movies from './pages/Movies'
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
        <Route path="contact" element={<Contact/>}/>
        <Route path="service" element={<Service/>}/>
       <Route path="movie/:type" element={<MovieDetails />} />
         <Route path='movies' element={<Movies/>}/>
         
        </Route>
    </Routes>
    </>
  )
}

export default App