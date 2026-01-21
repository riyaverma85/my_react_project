import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const movieData = {
  'now-showing': [
    { title: "Avatar 3", desc: "Epic sci-fi adventure continuing the story of Pandora." },
    { title: "Oppenheimer", desc: "A historical thriller about the Manhattan Project." }
  ],
  'upcoming': [
    { title: "Guardians of the Galaxy Vol.3", desc: "Next Marvel adventure in space." },
    { title: "Fast X", desc: "High-octane action and car chases." }
  ],
  'top-rated': [
    { title: "The Godfather", desc: "Classic mafia drama, rated 9.2/10." },
    { title: "The Shawshank Redemption", desc: "Prison drama with an inspiring story." }
  ]
};

const MovieDetails = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const movies = movieData[type] || [];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-6 text-yellow-400 capitalize">
        {type.replace('-', ' ')}
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {movies.map((movie, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p>{movie.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
