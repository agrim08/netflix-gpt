import { useEffect } from "react";
import { addTrailer } from "../utils/movieSlice";
import { API_ENDPOINTS, API_OPTIONS, TRAILER } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useTrailer = (id) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();

  useEffect(() => {
    !trailer && id && getTrailer();
  }, [id, trailer]);

  const getTrailer = async () => {
    const data = await fetch(API_ENDPOINTS.GET_TRAILER(id), API_OPTIONS);
    const jsonData = await data?.json();
    const trailerVideos = jsonData?.results?.filter(
      (video) => video?.type === TRAILER
    );
    const trailer = trailerVideos?.length
      ? trailerVideos?.[0]
      : jsonData?.results?.[0];

    dispatch(addTrailer(trailer));
  };
};

export default useTrailer;
