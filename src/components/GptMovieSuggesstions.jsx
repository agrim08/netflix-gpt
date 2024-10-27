import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggesstions = () => {
  const { movieResultsName, movieList } = useSelector((store) => store.gpt);
  if (!movieResultsName) return null;
  const movieNameArray = movieResultsName.split(",");

  return (
    <div className="p-4 m-4 bg-black bg-opacity-90 text-white">
      <div>
        {movieNameArray.map((movieName, index) => {
          return (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieList?.[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggesstions;
