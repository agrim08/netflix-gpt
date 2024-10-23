import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black">
      <div className="-mt-48 relative z-20 ml-5">
        <MovieList title={"Most Popular"} movies={movies?.mostPopularMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.mostPopularMovies} />
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Action"} movies={movies?.mostPopularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
