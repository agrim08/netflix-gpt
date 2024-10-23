import React from "react";
import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBgc = ({ movieId }) => {
  useTrailer();
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video bg-gradient-to-b from-black z-10 "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&loop=1"
        }
        title="Alien: Romulus | Final Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBgc;
