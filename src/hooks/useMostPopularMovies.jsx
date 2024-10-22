import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import React, { useEffect } from "react";

const useMostPopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    console.log(jsonData.results);

    dispatch(addMovie(jsonData.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useMostPopularMovies;
