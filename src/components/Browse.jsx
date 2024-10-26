import React from "react";
import Header from "./Header";
import useMostPopularMovies from "../hooks/useMostPopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlaingMovies from "../hooks/useNowPlaingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useMostPopularMovies();
  useNowPlaingMovies();
  return (
    <div className="flex flex-col ">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <div className="flex flex-col">
          <MainContainer />
          <SecondaryContainer />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Browse;
