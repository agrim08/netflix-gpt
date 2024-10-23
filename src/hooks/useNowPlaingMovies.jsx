import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";
import React, { useEffect } from "react";

const useNowPlaingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlaingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();

    dispatch(addNowPlaying(jsonData.results));
  };

  useEffect(() => {
    getNowPlaingMovies();
  }, []);
};

export default useNowPlaingMovies;
