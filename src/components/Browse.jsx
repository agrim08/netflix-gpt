import React, { useEffect } from "react";
import Header from "./Header";
import useMostPopularMovies from "../hooks/useMostPopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlaingMovies from "../hooks/useNowPlaingMovies";

const Browse = () => {
  useMostPopularMovies();
  useNowPlaingMovies();
  return (
    <div>
      <Header />
      <div className="flex flex-col">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
