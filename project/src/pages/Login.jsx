import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        Email: "",
        Password: ""
    })
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const savedEmail = localStorage.getItem("Email")
        const savedPassword = localStorage.getItem("Password")
        if (!savedEmail || !savedPassword) {
            alert("Please SignUp first!")
            navigate("/")
            return
        }
        if (credentials.Email.trim() === "" || credentials.Password.trim() === "") {
            alert("Email and Password cannot be empty!")
            return
        }
        if (credentials.Email !== savedEmail || credentials.Password !== savedPassword) {
            alert("Invalid Email or Password!")
            return
        }
        alert("Login Successful!")
        navigate("/home")
    }
    return (
 <div style={{ display: "flex", alignItems: "center", justifyContent: "center",  padding: "10px" }}>
 <div style={{ border: "3px solid #8b5cf6", borderRadius: "25px", padding: "1px" }}>
 <div style={{  padding: "40px",width: "100%",  maxWidth: "400px" }}>
<h1 style={{ fontSize: "32px", fontWeight: "bold", textAlign: "center", marginBottom: "30px"}}>Login</h1>
                    
<form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "20px"}}>
  <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
 <label>Enter your Email:</label>
 <input  type='email'   name="Email"   value={credentials.Email}   onChange={handleChange}
 style={{  padding: "15px", border: "2px solid gray", borderRadius: "12px"  }}
 placeholder="example@email.com"/>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
 <label>Enter your Password:</label>
<input type='password' name="Password"  value={credentials.Password}  onChange={handleChange}
style={{padding: "15px", border: "2px solid gray", borderRadius: "12px"}}
 placeholder="*******"/>
</div>
<button  type="submit"  style={{ padding: "15px", background: "#8b5cf6", color: "white",  border: "none", 
 borderRadius: "12px",  fontSize: "18px", fontWeight: "bold", cursor: "pointer"  }}  className='hover:bg-blue-400'> Login </button>
 </form>
 </div>
</div>
 </div>
    )
}

export default Login
