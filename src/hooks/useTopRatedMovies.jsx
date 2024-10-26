import { API_ENDPOINTS, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatdedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(API_ENDPOINTS.GET_TOP_RATED_MOVIES, API_OPTIONS);
    const jsonData = await data.json();

    dispatch(addMovie(jsonData?.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatdedMovies;
