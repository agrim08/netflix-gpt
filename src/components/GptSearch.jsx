import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggesstions from "./GptMovieSuggesstions";
// import { netflixBackgraound } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="bg-gradient-to-* bg-opacity-60 from-black to-black">
      <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg)] w-full h-[300px] bg-cover bg-center bg-no-repeat">
        <GptSearchBar />
        <GptMovieSuggesstions />
      </div>
    </div>
  );
};

export default GptSearch;
