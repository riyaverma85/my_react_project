import React from 'react'

const Login = () => {
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