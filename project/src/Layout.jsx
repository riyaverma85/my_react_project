import React from 'react'
import "./App.css"
import { Link,Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <header className="flex justify-center gap-6 bg-green-900 p-4 mt-1 text-white pt-1 pb- ">
         <Link to="home" className='hover:text-blue-400'>Home</Link>
         <Link to="about" className='hover:text-blue-400'>About</Link>
         <Link to="contect" className='hover:text-blue-400'>Contect</Link> 
         <Link to="service" className='hover:text-blue-400'>Service</Link>
         <Link to="signup" className='hover:text-blue-400'>SignUp</Link>
    </header>
    <Outlet/>
    </>
  )
}

export default Layout