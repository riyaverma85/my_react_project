import React from 'react';
import { useNavigate } from 'react-router-dom';
import RippleGrid from './RippleGrid';

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    navigate(`/movie/${type}`);
  };

  return (
    <>
      {/* 🔹 Hero Section */}
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <RippleGrid
          enableRainbow={false}
          gridColor="#ffffff"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            textShadow: '0 0 10px rgba(255,255,255,0.8)',
            fontFamily: "'Poppins', sans-serif",
            zIndex: 1
          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '10px', animation: 'fadeIn 2s ease-in-out' }}>
            🎬 Welcome to Movie Ticket Portal
          </h1>
          <p style={{ fontSize: '1.3rem', fontWeight: '400', color: '#dbeafe', animation: 'fadeInUp 3s ease-in-out' }}>
            Book your favorite movie tickets instantly 🍿
          </p>
        </div>
      </div>

      {/* 🔹 Movie Cards Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          
          <div
            onClick={() => handleCardClick('now-showing')}
            className="cursor-pointer bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:scale-105 transform transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-2 text-yellow-400">Now Showing</h2>
            <p>Check out the latest movies currently playing in theaters.</p>
          </div>

          <div
            onClick={() => handleCardClick('upcoming')}
            className="cursor-pointer bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:scale-105 transform transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-2 text-yellow-400">Upcoming Releases</h2>
            <p>Get ready for upcoming blockbusters and exclusive premieres.</p>
          </div>

          <div
            onClick={() => handleCardClick('top-rated')}
            className="cursor-pointer bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:scale-105 transform transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-2 text-yellow-400">Top Rated</h2>
            <p>Explore the top-rated movies loved by critics and audiences alike.</p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
