import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f1724] text-white border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* 🔹 Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-pink-400 mb-2">🎬 Move Ticket</h2>
          <p className="text-gray-400 text-sm">
            Your ultimate movie ticket booking platform. Enjoy seamless booking, exclusive offers, and cinematic experience at your fingertips.
          </p>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-pink-400 transition">About</a></li>
            <li><a href="/movies" className="hover:text-pink-400 transition">Movies</a></li>
            <li><a href="/contact" className="hover:text-pink-400 transition">Contact</a></li>
            <li><a href="/signup" className="hover:text-pink-400 transition">Sign Up</a></li>
          </ul>
        </div>

        {/* 🔹 Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">Twitter</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-600 transition">YouTube</a>
          </div>
        </div>

      </div>

      {/* 🔹 Bottom Bar */}
      <div className="border-t border-white/10 text-gray-500 text-sm text-center py-4">
        © {new Date().getFullYear()} Move Ticket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
