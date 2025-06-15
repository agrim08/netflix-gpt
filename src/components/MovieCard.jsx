import React from "react";
import { MOVIE_POSTER_CDN } from "../utils/constants";

const MovieCard = ({ posterPath, onClick }) => {
  if (!posterPath) return null;
  return (
    <div
      className="w-48 pr-2 relative group cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <img
        src={MOVIE_POSTER_CDN + posterPath}
        alt="movie"
        className="w-full rounded-lg"
      />
      <button
        className="absolute bottom-2 left-2 bg-black bg-opacity-50 p-3 rounded-full transition-all duration-300 group-hover:bg-opacity-75 group-hover:scale-110"
        aria-label="Play movie trailer"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7L8 5z" />
        </svg>
      </button>
    </div>
  );
};

export default MovieCard;