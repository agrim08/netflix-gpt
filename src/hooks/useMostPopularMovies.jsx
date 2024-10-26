import { API_ENDPOINTS, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useMostPopularMovies = () => {
  const mostPopularMovies = useSelector(
    (store) => store.movies.mostPopularMovies
  );
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(API_ENDPOINTS.GET_POPULAR_MOVIES, API_OPTIONS);
    const jsonData = await data.json();

    dispatch(addMovie(jsonData.results));
  };

  useEffect(() => {
    !mostPopularMovies && getPopularMovies();
  }, []);
};

export default useMostPopularMovies;
