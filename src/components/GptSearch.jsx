import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggesstions from "./GptMovieSuggesstions";
import { netflixBackgraound } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 bg-gradient-to-* bg-opacity-60 from-black to-black">
        <img className="w-full" src={netflixBackgraound} alt="bg-image" />
      </div>
      <GptSearchBar />
      <GptMovieSuggesstions />
    </div>
  );
};

export default GptSearch;
