import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { setSelectedMovie, openDialog } from "../utils/movieSlice";
import "../styles/scrollbar.css";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  const scrollContainerRef = useRef(null);

  const handleMovieClick = (movie) => {
    dispatch(setSelectedMovie(movie));
    dispatch(openDialog());
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="px-2 sm:px-4 bg-transparent relative">
      <h1 className="text-2xl sm:text-3xl pt-2 mb-3 text-white">{title}</h1>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 sm:p-4 rounded-full hover:bg-opacity-75 transition-all duration-300 cursor-pointer z-10"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide hover:scrollbar-show overflow-y-hidden"
        >
          <div className="flex space-x-2 sm:space-x-4">
            {movies?.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie?.poster_path}
                onClick={() => handleMovieClick(movie)}
              />
            ))}
          </div>
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 sm:p-4 rounded-full hover:bg-opacity-75 transition-all duration-300 cursor-pointer z-10"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieList;