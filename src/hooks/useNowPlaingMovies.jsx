import { API_ENDPOINTS, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlaingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlaingMovies = async () => {
    const data = await fetch(API_ENDPOINTS.GET_NOW_PLAYING, API_OPTIONS);
    const jsonData = await data.json();

    dispatch(addNowPlaying(jsonData.results));
  };

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlaingMovies();
    }
  }, []);
};

export default useNowPlaingMovies;
