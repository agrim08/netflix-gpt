import { useEffect } from "react";
import { addTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useTrailer = () => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();

  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/912649/videos?language=en-US",
      API_OPTIONS
    );
    const jsonData = await data?.json();
    const trailerVideos = jsonData?.results?.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = trailerVideos.length
      ? trailerVideos[0]
      : jsonData.results[0];

    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    !trailer && getTrailer();
  }, []);
};

export default useTrailer;
