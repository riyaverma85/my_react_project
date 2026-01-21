import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // 👈 CSS yahan add karna zaroori hai
const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
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
    // } else if (isNaN(form.number)) {
    //   alert("Please enter valid number");
    //   valid = false;
     }

    if (valid) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let existUser = users.find((e) => e.email === form.email);

      // if (existUser) {
      //   alert("User already exists");
      //   return;
      // }

      users.push(form);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Signup successful!");
      navigate("/login");
    }
  };

  return (
    <div className="signup-bg flex justify-center items-center min-h-screen relative overflow-hidden">
      {/* 🔹 Animated Background Lights */}
      <div className="absolute inset-0 bg-animated"></div>

      {/* 🔹 Transparent Glass Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-96 p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-yellow-400 shadow-2xl"
      >
        <h1 className="text-3xl font-extrabold text-yellow-400 mb-6 text-center tracking-wide">
          🎬 Movie Ticket SignUp
        </h1>

        <label className="block text-gray-200 font-semibold mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Enter your name"
        />

        <label className="block text-gray-200 font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Enter your email"
        />

        {/* <label className="block text-gray-200 font-semibold mb-1">Number</label>
        <input
          type="number"
          name="number"
          value={form.number}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Enter your number"
        /> */}

        <label className="block text-gray-200 font-semibold mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Enter password"
        />

        <label className="block text-gray-200 font-semibold mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          name="cpassword"
          value={form.cpassword}
          onChange={handleChange}
          className="w-full mb-6 p-2 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Confirm password"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
