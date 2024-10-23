import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBgc from "./VideoBgc";

const MainContainer = () => {
  const moviesList = useSelector((store) => store?.movies?.mostPopularMovies);
  const [mainMovie, setMainMovie] = useState({});
  const { original_title, overview, id } = mainMovie;

  const handleMovies = () => {
    if (!moviesList || moviesList.length === 0) return;
    setMainMovie(moviesList[5]);
  };

  useEffect(() => {
    handleMovies();
  }, [moviesList]);

  // Use another useEffect to handle mainMovie updates
  useEffect(() => {
    if (Object.keys(mainMovie).length > 0) {
    }
  }, [mainMovie]);

  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBgc movieId={id} />
    </div>
  );
};

export default MainContainer;
