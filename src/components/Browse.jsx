import React, { useEffect } from "react";
import Header from "./Header";
import useMostPopularMovies from "../hooks/useMostPopularMovies";

const Browse = () => {
  useMostPopularMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
