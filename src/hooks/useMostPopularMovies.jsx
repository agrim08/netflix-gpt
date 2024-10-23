import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import React, { useEffect } from "react";

const useMostPopularMovies = () => {
  const mostPopularMovies = useSelector(
    (store) => store.movies.mostPopularMovies
  );
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();

    dispatch(addMovie(jsonData.results));
  };

  useEffect(() => {
    !mostPopularMovies && getPopularMovies();
  }, []);
};

export default useMostPopularMovies;
