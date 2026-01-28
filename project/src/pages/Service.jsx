import React from "react";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "🎥",
      title: "Movie Ticket Booking",
      desc: "Book your favourite movie tickets instantly with real-time seat availability and secure payment options.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: "🍿",
      title: "Cinema Offers & Discounts",
      desc: "Grab exclusive deals, cashback, and discounts on movie tickets and combo packs every weekend.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "🎬",
      title: "Premium Screen Experience",
      desc: "Enjoy high-quality Dolby Atmos sound and 4K visuals in luxury cinema halls near you.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: "📱",
      title: "Mobile Booking App",
      desc: "Book, manage, and cancel your tickets effortlessly from our mobile-friendly platform anytime.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: "💳",
      title: "Easy & Secure Payments",
      desc: "Multiple payment options including UPI, credit/debit cards, and wallets with instant confirmation.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: "🎁",
      title: "Membership & Rewards",
      desc: "Earn points on every booking and unlock free tickets, upgrades, and special member privileges.",
      color: "from-red-400 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1724] to-[#050b18] text-white px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Our Services 🎟️
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Move Ticket brings you a seamless entertainment experience — from
          booking tickets to enjoying premium screens, we make every movie moment special.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >
            <div
              className={`w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-r ${s.color} grid place-items-center text-3xl`}
            >
              {s.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400 mb-5">{s.desc}</p>
            <button
              onClick={() => navigate("/signup")}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:scale-105 transition"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 CTA Section */}
      <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-5 shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Ready to watch your next blockbuster?
          </h2>
          <p className="text-gray-400">
            Discover, book, and enjoy movies — all in one place!
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/signup")}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Book Tickets
          </button>
          <button
            onClick={() => navigate("/about")}
            className="border border-white/10 px-5 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
