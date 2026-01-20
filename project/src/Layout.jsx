import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md text-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-2xl font-bold tracking-wider text-blue-400 hover:text-cyan-300 transition-all duration-300">
            🎬 MovieHub
          </h1>

          <nav className="hidden md:flex gap-8 text-lg font-medium">
            <Link
              to="home"
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              Home
            </Link>
            <Link
              to="about"
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              About
            </Link>
            <Link
              to="service"
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              Service
            </Link>
            <Link
              to="contect"
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              Contact
            </Link>
            <Link
              to="signup"
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              Sign Up
            </Link>
          </nav>

          <div
            className="md:hidden cursor-pointer text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </div>
        </div>

    
        {menuOpen && (
      <div className="md:hidden flex flex-col items-center gap-6 bg-black bg-opacity-90 pb-6 pt-2 transition-all duration-500 animate-slideDown">
            <Link
              to="home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 text-lg"
            >
              Home
            </Link>
            <Link
              to="about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 text-lg"
            >
              About
            </Link>
            <Link
              to="service"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 text-lg"
            >
              Service
            </Link>
            <Link
              to="contect"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 text-lg"
            >
              Contact
            </Link>
            <Link
              to="signup"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 text-lg"
            >
              Sign Up
            </Link>
          </div>
        )}
      </header>

      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
