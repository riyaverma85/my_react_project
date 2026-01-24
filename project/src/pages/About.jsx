import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1724] to-[#050b18] text-white px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        {/* 🔹 Header Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-4 py-1 rounded-full mb-4">
              Move Ticket
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              About Move Ticket 🎟️
            </h1>
            <p className="text-gray-400 mb-6">
              Move Ticket is your ultimate online movie ticket booking platform.
              From blockbuster releases to indie gems, we bring the best cinema
              experience right to your fingertips. Book tickets, explore upcoming
              movies, and enjoy the show hassle-free!
            </p>

            {/* 🔸 Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:-translate-y-1 transition">
                <div className="text-2xl mb-2">🎫</div>
                <h4 className="font-semibold">Instant Booking</h4>
                <p className="text-sm text-gray-400">
                  Book tickets in seconds with our smooth and secure system.
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:-translate-y-1 transition">
                <div className="text-2xl mb-2">🍿</div>
                <h4 className="font-semibold">Cinema Experience</h4>
                <p className="text-sm text-gray-400">
                  Discover theatres, showtimes, and offers near you.
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:-translate-y-1 transition">
                <div className="text-2xl mb-2">💳</div>
                <h4 className="font-semibold">Easy Payments</h4>
                <p className="text-sm text-gray-400">
                  Multiple payment options for a fast and smooth checkout.
                </p>
              </div>
            </div>

            {/* 🔸 Buttons */}
            <div className="flex gap-3 flex-wrap">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:scale-105 transition">
                Book Now
              </button>
              <button className="border border-white/10 px-5 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition">
                View Team
              </button>
            </div>
          </div>

          {/* 🔹 Movie Poster Visual */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-white/5 border border-white/10 p-5 rounded-2xl shadow-2xl">
              <div className="h-60 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-gray-400 font-semibold">
                🎥 Movie Poster Preview
              </div>
              <div className="mt-4 text-gray-400 text-sm flex justify-between">
                <span>Now Showing</span>
                <span className="text-pink-400 font-semibold">Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Our Story */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold mb-2">Our Story</h2>
          <p className="text-gray-400">
            Founded in 2022, Move Ticket began with a vision to simplify the way
            people enjoy movies. We wanted to eliminate long queues, provide
            transparent pricing, and deliver an easy-to-use interface that movie
            lovers could trust.
          </p>
        </div>

        {/* 🔹 Team Section */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg mb-10">
          <h3 className="text-xl font-bold mb-3">Our Team</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Riya Sharma", role: "Founder · CEO", initials: "RS" },
              { name: "Arjun Mehta", role: "UI/UX Designer", initials: "AM" },
              { name: "Shivani Patel", role: "Backend Developer", initials: "SP" },
            ].map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#0b1220] p-4 rounded-xl border border-white/10"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold grid place-items-center rounded-xl">
                  {m.initials}
                </div>
                <div>
                  <h5 className="font-semibold">{m.name}</h5>
                  <p className="text-sm text-gray-400">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 CTA Footer */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-white/10">
          <div>
            <h4 className="text-lg font-semibold mb-1">
              Ready to book your next movie?
            </h4>
            <p className="text-gray-400 text-sm">
              Our team is here to help — grab your popcorn and book your seat now!
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:scale-105 transition">
              Book Tickets
            </button>
            <button className="border border-white/10 px-5 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
