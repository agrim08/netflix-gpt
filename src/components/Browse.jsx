import React, { useEffect } from "react";
import Header from "./Header";
import useMostPopularMovies from "../hooks/useMostPopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useMostPopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
