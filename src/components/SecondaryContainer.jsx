import React from "react";
import MovieList from "./MovieList";
import MovieDialog from "./MovieDialog";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  const isDialogOpen = useSelector((store) => store.movies.isDialogOpen);

  return (
    <div className="relative bg-black">
      <div
        className={`transition-all duration-500 ${
          isDialogOpen ? "blur-sm" : "blur-none"
        }`}
      >
        <div className="-mt-32 sm:-mt-48 relative z-20 ml-2 sm:ml-5">
          <MovieList title={"Most Popular"} movies={movies?.mostPopularMovies} />
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies?.mostPopularMovies} />
          <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Action"} movies={movies?.mostPopularMovies} />
        </div>
      </div>
      <MovieDialog />
    </div>
  );
};

export default SecondaryContainer;