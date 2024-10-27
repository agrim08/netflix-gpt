import { API_ENDPOINTS, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatdedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(API_ENDPOINTS.GET_TOP_RATED_MOVIES, API_OPTIONS);
    const jsonData = await data.json();

    dispatch(addTopRatedMovies(jsonData?.results));
  };
  useEffect(() => {
    if (!topRatedMovies) {
      getTopRatedMovies();
    }
  }, []);
};

export default useTopRatdedMovies;
