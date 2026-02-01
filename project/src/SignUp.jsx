import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (form.name.trim() === "") {
      alert("Please enter name");
      valid = false;
    }

    if (form.email.trim() === "") {
      alert("Please enter email");
      valid = false;
    }

    if (form.password.trim() === "") {
      alert("Please enter password");
      valid = false;
    }

    if (form.password !== form.cpassword) {
      alert("Passwords do not match!");
      valid = false;
    }

    if (valid) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(form);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful!");
      navigate("/login");
    }
  };

  return (
    <div className="signup-container flex justify-center items-center min-h-screen relative overflow-hidden">
      <video  autoPlay  loop  muted  playsInline className="video-bg absolute inset-0 w-full h-full object-cover" >
        <source src="/1823-150669776_large.mp4" type="video/mp4" />
      </video>

      <div className="overlay absolute inset-0 bg-black/70"></div>

      <form onSubmit={handleSubmit}
        className="form-card relative z-20 w-80 p-6 bg-white/20 backdrop-blur-xl border-2 border-yellow-400/70 rounded-2xl shadow-2xl hover:shadow-yellow-400/30 hover:scale-[1.02] transition-all duration-300"
      >
        <h1 className="title text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6 text-center">
           Movie SignUp
        </h1>

        <div className="input-group space-y-4">
          <div>
            <label className="label block text-yellow-100 font-semibold mb-2 text-sm"> Name</label>
            <input  name="name"  value={form.name}  onChange={handleChange} className="input-field w-full p-3 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white placeholder-yellow-200 font-medium text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:border-yellow-400/60 transition-all duration-200" placeholder="Enter your name" />
          </div>

          <div>
            <label className="label block text-yellow-100 font-semibold mb-2 text-sm">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="input-field w-full p-3 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white placeholder-yellow-200 font-medium text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:border-yellow-400/60 transition-all duration-200" placeholder="Enter your email"/>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label block text-yellow-100 font-semibold mb-2 text-sm">Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} className="input-field w-full p-3 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white placeholder-yellow-200 font-medium text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:border-yellow-400/60 transition-all duration-200" placeholder="Password"/>
            </div>

            <div>
              <label className="label block text-yellow-100 font-semibold mb-2 text-sm">Confirm</label>
              <input type="password" name="cpassword" value={form.cpassword} onChange={handleChange} className="input-field w-full p-3 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white placeholder-yellow-200 font-medium text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:border-yellow-400/60 transition-all duration-200" placeholder="Confirm" />
            </div>
          </div>
        </div>

        <button  type="submit"
          className="submit-btn w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-xl text-lg shadow-lg mt-6 hover:from-yellow-500 hover:shadow-yellow-400/40 hover:scale-105 transition-all duration-200"
        > Sign Up </button>

        <p className="login-link text-center mt-4 text-yellow-100 text-sm">
          Already have account? 
          <button 
            type="button" 
            onClick={() => navigate("/login")}
            className="ml-1 text-yellow-300 hover:text-white font-bold underline"
          >  Login </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
