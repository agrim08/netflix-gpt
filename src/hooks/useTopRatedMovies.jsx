import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import React, { useEffect } from "react";

const useTopRatdedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();

    dispatch(addMovie(jsonData?.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatdedMovies;
