import React, { useState } from 'react'

const Login = () => {
    let [form,setForm]=useState("")
    
  return (
    <>
<form>
    Enter Email <input type='text' name='email'/><br/>
    Enter Password <input type='password' name='password'/><br/>
    <button type='submit'>Login</button>
</form>
    </>
  )
}

export default Login