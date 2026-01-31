import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🔥 Navbar Section */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0f1724] via-[#1e0b45] to-[#0f1724] bg-opacity-90 backdrop-blur-md text-white shadow-[0_0_20px_rgba(255,0,255,0.3)] z-50 border-b border-pink-500/20">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          {/* 🔹 Logo */}
          <h1 className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
            🎬 MovieHub
          </h1>

          {/* 🔹 Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-lg font-medium">
            {[
              { name: "Home", to: "home" },
              { name: "About", to: "about" },
              { name: "Service", to: "service" },
              { name: "Contact", to: "contact" },
              { name: "Sign Up", to: "signup" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="relative group hover:scale-110 transition-transform duration-300"
              >
                <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                  {item.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* 🔹 Mobile Menu Toggle */}
          <div
            className="md:hidden cursor-pointer text-3xl hover:text-pink-400 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </div>
        </div>

        {/* 🔹 Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-6 bg-gradient-to-b from-[#0f1724] to-[#1e0b45] pb-6 pt-2 border-t border-pink-500/20 animate-slideDown">
            {[
              { name: "Home", to: "home" },
              { name: "About", to: "about" },
              { name: "Service", to: "service" },
              { name: "Contact", to: "contact" },
              { name: "Sign Up", to: "signup" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-400 text-lg font-semibold transition-all duration-300 hover:scale-110"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* 🔹 Main Section */}
      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
