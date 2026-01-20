import React from 'react'
import '../App.css';
import RippleGrid from './RippleGrid';

const Home = () => {
  return (
    <>
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        {/* 🔹 RippleGrid Background */}
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

        {/* 🔹 Centered Text Overlay */}
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
          }}
        >
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '10px',
              animation: 'fadeIn 2s ease-in-out',
            }}
          >
            🎬 Welcome to Movie Ticket Portal
          </h1>
          <p
            style={{
              fontSize: '1.3rem',
              fontWeight: '400',
              color: '#dbeafe',
              animation: 'fadeInUp 3s ease-in-out',
            }}
          >
            Book your favorite movie tickets instantly 🍿
          </p>
        </div>
      </div>
    </>
  )
}

export default Home;
