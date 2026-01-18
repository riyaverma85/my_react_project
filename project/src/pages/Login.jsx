import React, { useState } from 'react'

const Login = () => {
    let [Email,setEmail]=useState("")
    let [Password,setpassword]=useState("")
    let hendleSubmit =(e)=>{
        e.preventDefault()

        let users=JSON.parse(localStorage.getItem("users")) || []
        let existuser=users.find((e)=>{
          return e.Email ==Email
        })
     if(!existuser){
      alert("please register first") 
      return  
    }
    if (Password!=existuser.Password){
      alert("password invalid")
      setpassword("")
      return
    }
    alert("login successful")
    navigate("/home")
    }
    <>
<form onSubmit={hendleSubmit}>
  Enter Email <input type='text' name='email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} /><br/>
  Enter Password <input type='password' name='password' value={Password} onChange={(e)=>{setpassword(e.target.value)}}/><br/>
    <button type='submit'>Login</button>
</form>
    </>
    }


export default Login