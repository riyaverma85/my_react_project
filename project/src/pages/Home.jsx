import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RippleGrid from './RippleGrid';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingData, setBookingData] = useState({
    theatre: '',
    time: '',
    seat: '',
    snacks: '',
  });

  // 🔹 Ref for Trending Section (Book Tickets scroll)
  const trendingRef = useRef(null);

  const handleCardClick = (type) => {
    navigate(`/movie/${type}`);
  };

  const handleBookNow = (movie) => {
    setSelectedMovie(movie);
  };

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    alert(
      `🎟️ Booking Confirmed!\nMovie: ${selectedMovie.title}\nTheatre: ${bookingData.theatre}\nTime: ${bookingData.time}\nSeat: ${bookingData.seat}\nSnacks: ${bookingData.snacks}`
    );
    setSelectedMovie(null);
    setBookingData({ theatre: '', time: '', seat: '', snacks: '' });
  };

  // 🔸 Button Functions
  const scrollToTrending = () => {
    trendingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToMoviesPage = () => {
    navigate('/movies');
  };

  const movies = [
  { title: 'Border 2', img: '/12.jpg' },
  {
    title: 'Spider-Man: No Way Home',
    img: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_UF1000,1000_QL80_.jpg',
  },
  { title: 'Oppenheimer', img: '/download (1).jpg' },
  { title: 'The Batman', img: '/33.jpg' },
  { title: 'Inception', img: '/innnn.jpg' },
  { title: 'Interstellar', img: '/interstaller.jpg' },
  { title: 'Avatar: The Way of Water', img: '/avatar.jpg' },
];


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
            zIndex: 1,
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

      <div className="min-h-screen bg-gradient-to-b from-[#0f1724] to-[#050b18] text-white">
        {/* 🔹 Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Experience Cinema Like Never Before 🍿
            </h1>
            <p className="text-gray-400 mb-6">
              Welcome to{' '}
              <span className="text-pink-400 font-semibold">Move Ticket</span> — your one-stop
              destination for booking movie tickets quickly and easily. Explore the latest releases
              and enjoy your favorite shows hassle-free!
            </p>
            <div className="flex gap-4">
              {/* ✅ Book Tickets scrolls down */}
              <button
                onClick={scrollToTrending}
                className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Book Tickets
              </button>

              {/* ✅ View Movies navigates to movies page */}
              <button
                onClick={goToMoviesPage}
                className="border border-white/10 px-6 py-3 rounded-lg text-gray-300 hover:bg-white/10 transition"
              >
                View Movies
              </button>
            </div>
          </div>

          <div className="mt-10 md:mt-0 flex justify-center">
            <div className="w-72 h-72 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center shadow-xl border border-white/10">
              <h2 className="text-3xl font-bold text-gray-300">🎥 Move Ticket</h2>
            </div>
          </div>
        </section>

        {/* 🔸 Section 2: Trending Movies + Booking */}
        <section
          ref={trendingRef}
          className="px-8 md:px-16 py-16 bg-white/5 backdrop-blur-sm border-t border-white/10"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">🔥 Trending Movies</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {movies.map((movie, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 transition cursor-pointer"
              >
                <img src={movie.img} alt={movie.title} className="w-full h-64 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-semibold">{movie.title}</h3>
                  <button
                    onClick={() => handleBookNow(movie)}
                    className="mt-2 bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-1 rounded-md text-sm font-semibold hover:scale-105 transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Popup */}
          {selectedMovie && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
              <div className="bg-[#0f1724] border border-white/10 rounded-2xl p-8 max-w-lg w-full shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  🎟️ Booking for {selectedMovie.title}
                </h3>

                <table className="w-full text-gray-300 mb-6 border border-white/10 rounded-xl overflow-hidden">
                  <tbody>
                    <tr className="border-t border-white/10">
                      <td className="p-3">Theatre</td>
                      <td className="p-3">
                        <select
                          name="theatre"
                          onChange={handleChange}
                          value={bookingData.theatre}
                          className="bg-transparent border border-white/20 px-3 py-1 rounded w-full"
                        >
                          <option value="">Select</option>
                          <option value="DB City">DB City</option>
                          <option value="Rang Mahal">Rang Mahal</option>
                          <option value="Jyoti Talkies">Jyoti Talkies</option>
                        </select>
                      </td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="p-3">Show Time</td>
                      <td className="p-3">
                        <select
                          name="time"
                          onChange={handleChange}
                          value={bookingData.time}
                          className="bg-transparent border border-white/20 px-3 py-1 rounded w-full"
                        >
                          <option value="">Select</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="7:30 PM">7:30 PM</option>
                        </select>
                      </td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="p-3">Seat Type</td>
                      <td className="p-3">
                        <select
                          name="seat"
                          onChange={handleChange}
                          value={bookingData.seat}
                          className="bg-transparent border border-white/20 px-3 py-1 rounded w-full"
                        >
                          <option value="">Select</option>
                          <option value="Silver">Silver</option>
                          <option value="Gold">Gold</option>
                          <option value="Platinum">Platinum</option>
                        </select>
                      </td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="p-3">Snacks Combo</td>
                      <td className="p-3">
                        <select
                          name="snacks"
                          onChange={handleChange}
                          value={bookingData.snacks}
                          className="bg-transparent border border-white/20 px-3 py-1 rounded w-full"
                        >
                          <option value="">Select</option>
                          <option value="Popcorn + Coke">Popcorn + Coke</option>
                          <option value="Nachos + Pepsi">Nachos + Pepsi</option>
                          <option value="Burger + Sprite">Burger + Sprite</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedMovie(null)}
                    className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirm}
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:scale-105 transition"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 🔹 Section 3: Why Choose Move Ticket */}
        <section className="px-8 md:px-16 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🎬 Why Choose Move Ticket?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:-translate-y-2 transition text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">Fast & Easy</h4>
              <p className="text-gray-400 text-sm">
                Book your tickets in seconds with our clean and quick interface.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:-translate-y-2 transition text-center">
              <div className="text-3xl mb-3">💳</div>
              <h4 className="font-semibold mb-2">Multiple Payments</h4>
              <p className="text-gray-400 text-sm">
                Pay your way — Credit Card, UPI, Netbanking, or Wallet.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:-translate-y-2 transition text-center">
              <div className="text-3xl mb-3">🎉</div>
              <h4 className="font-semibold mb-2">Exclusive Offers</h4>
              <p className="text-gray-400 text-sm">
                Enjoy discounts, coupons, and festival movie combos every week!
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
