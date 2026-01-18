// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import "./App.css"
// const SignUp = () => {
//     const navigate=useNavigate()
//     const [name,setname]=useState({
//         Name:"",
//         Email:"",
//         Password:""
//     })
//     const handelChange=(e) => {
//         setname({...name,[e.target.name]:e.target.value})
//     }
//     const handelSubmit=(e)=>{
//         e.preventDefault();
//         let valid=true;
    
// if (name.Name.trim()==""){
//     alert("Name cont be empty")
//     valid=false;
// }
// else if(name.Email.trim()==""){
//     alert("Email cont be empty")
//     valid=false;
// }
//    if(valid){
//     alert("SignUp Successfull")
//     localStorage.setItem("Name", name.Name)
//     localStorage.setItem("Email", name.Email)
//     localStorage.setItem("Password", name.Password)
//     navigate("/login")
//    } }
//   return (
//     <>
//     <div className="border-2 border-green-800 p-9 rounded-lg bg-green-300 mx-auto mt-10 max-w-md w-full">
//   <h1 className="text-2xl font-bold text-center mb-3 text-gray-800">SignUp</h1>
//   <form onSubmit={handelSubmit} className="space-y-4">
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1">Enter your Name:</label>
//       <input type="text" name="Name" value={name.Name} onChange={handelChange}
//         className="w-full p-2 border border-gray-300 rounded-md bg-violet-50" />
//     </div>
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1">Enter your Email:</label>
//       <input type="email" name="Email" value={name.Email} onChange={handelChange}
//         className="w-full p-2 border border-gray-300 rounded-md bg-violet-50" />
//     </div>
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1">Enter your Password:</label>
//       <input type="password" name="Password" value={name.Password} onChange={handelChange}
//         className="w-full p-2 border border-gray-300 rounded-md bg-violet-50" />
//     </div>
//     <button type="submit"
//       className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-meh-900 font-bold">
//       SignUp
//     </button>
//   </form>
//   <p className="text-center mt-4 text-gray-700">
//     Don't have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
//   </p>
// </div>

//     </>
//   )
// }

// export default SignUp



import React from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
let navigate=useNavigate()

  let[form,setform]=useState({
    name:"",
    email:"",
    number:"",
    password:"",
    cpassword:""
  })
  let handelChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  let handelSubmit=(e)=>{
    e.preventDefault();
    let valid=true;
    if( form.name.trim()==""){
      alert(" please enter name")
      valid=false
  }
  else if(isNaN(form.number)){
    alert(" please enter valid number")
    valid=false
  }
  if(valid){

    let users=JSON.parse(localStorage.getItem("users")) || []

    let existuser=users.find((e)=>{
      return e.email==form.email
    })
    if (existuser){
      alert("user already exist")
      return
    }
    users.push(form)
    localStorage.setItem("users",JSON.stringify(users))
    alert("signup successfull")
    navigate("/login")
  }
  }
  return (
    <>
  
    <form onSubmit={handelSubmit}  className='text-gray-950 border-2  mt-16 ml-90 mr-90'>
        <h1> signup</h1> <br/>
       Enter Name<input type='text' name='name' value={form.name} onChange={handelChange}/><br/>
       Enter Email<input type='email' name='email' value={form.email} onChange={handelChange}/><br/>
       Enter Number<input type='number' name='number' value={form.number} onChange={handelChange}/><br/>
       Enter Password<input type='password' name='password' value={form.password} onChange={handelChange}/><br/>
       Enter Confirm Password<input type='password' name='cpassword' value={form.cpassword} onChange={handelChange}/><br/>
       
       <button type='submit'>SignUp</button>
    </form>
    </>
  )
}

export default SignUp





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     number: "",
//     password: "",
//     cpassword: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;

//     if (form.name.trim() === "") {
//       alert("Please enter name");
//       valid = false;
//     } else if (isNaN(form.number)) {
//       alert("Please enter a valid number");
//       valid = false;
//     }

//     if (valid) {
//       let users = JSON.parse(localStorage.getItem("users")) || [];

//       let existUser = users.find((u) => u.email === form.email);
//       if (existUser) {
//         alert("User already exists");
//         return;
//       }

//       users.push(form);
//       localStorage.setItem("users", JSON.stringify(users));
//       alert("Signup successful!");
//       navigate("/login");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600">
//       <form onSubmit={handleSubmit}
//         className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-[90%] max-w-md text-white border border-white/20"
//       >
//         <h1 className="text-3xl font-bold text-center mb-6 tracking-wider text-yellow-300">
//            Movie Ticket SignUp</h1>

//         <div className="flex flex-col gap-4">
//           <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange}
//             className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           />

//           <input type="email"  name="email"  placeholder="Email Address"  value={form.email}  onChange={handleChange}
//             className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           />

//           <input type="number" name="number" placeholder="Mobile Number"  value={form.number}  onChange={handleChange}
//             className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           />

//           <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange}
//             className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           />

//           <input type="password" name="cpassword" placeholder="Confirm Password" value={form.cpassword} onChange={handleChange}
//             className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           />
//         </div>

//         <button type="submit"
//           className="mt-6 w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
//         >Sign Up</button>

//         <p className="text-center mt-4 text-sm text-gray-200">
//           Already have an account?{" "}
//           <span onClick={() => navigate("/login")}
//             className="text-yellow-300 hover:underline cursor-pointer"
//           > Login </span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
