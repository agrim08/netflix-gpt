import React from "react";
import { MOVIE_POSTER_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-48 pr-2">
      <img src={MOVIE_POSTER_CDN + posterPath} alt="movie" />
    </div>
  );
};

export default MovieCard;
