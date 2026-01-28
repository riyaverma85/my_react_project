import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! 🎉");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1724] to-[#050b18] text-white px-6 md:px-12 py-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Contact Us 📬
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Got a question, feedback, or partnership idea?  
          We’d love to hear from you! Fill out the form below and our team will reach out shortly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* 🔹 Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-lg"
        >
          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0b1220] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0b1220] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-[#0b1220] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition"
          >
            Send Message 🚀
          </button>
        </form>

        {/* 🔹 Contact Info */}
        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">📍 Office Location</h3>
            <p className="text-gray-400">
              Move Ticket HQ, Mumbai, Maharashtra, India
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">📞 Contact Info</h3>
            <p className="text-gray-400">Phone: +91 98765 43210</p>
            <p className="text-gray-400">Email: support@moveticket.in</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">🕒 Working Hours</h3>
            <p className="text-gray-400">Mon – Sat: 9:00 AM – 8:00 PM</p>
            <p className="text-gray-400">Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom CTA */}
      <div className="mt-16 text-center bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-lg">
        <h2 className="text-2xl font-bold mb-2">
          Let’s make your next movie night unforgettable 🍿
        </h2>
        <button
          onClick={() => (window.location.href = "/service")}
          className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
        >
          Explore Services
        </button>
      </div>
    </div>
  );
};

export default Contact;
