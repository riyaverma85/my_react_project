import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // 👈 use same background animation CSS

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let existUser = users.find((u) => u.email === Email);

    if (!existUser) {
      alert("Please register first!");
      navigate("/signup");
      return;
    }

    // if (Password !== existUser.password) {
    //   alert("Invalid password!");
    //   setPassword("");
    //   return;
    // }

    alert("Login successful!");
    navigate("/home");
  };

  return (
    <div className="signup-bg flex justify-center items-center min-h-screen relative overflow-hidden">
      {/* 🔹 Same animated background as signup */}
      <div className="absolute inset-0 bg-animated"></div>

      {/* 🔹 Transparent login form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-96 p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-yellow-400 shadow-2xl"
      >
        <h1 className="text-3xl font-extrabold text-yellow-400 mb-6 text-center tracking-wide">
          🎟️ Movie Ticket Login
        </h1>

        <label className="block text-gray-200 font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Enter your email"
          required
        />

        <label className="block text-gray-200 font-semibold mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Enter your password"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm text-gray-200">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-yellow-300 hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
