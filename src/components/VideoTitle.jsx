import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({ original_title, overview }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  return (
    <div className=" w-full h-full bg-black bg-opacity-35 absolute flex flex-col pt-52 gap-4 pl-12 items-start ">
      <h1 className="text-3xl font-extrabold text-white flex flex-wrap w-1/2">
        {original_title}
      </h1>
      <p className="w-1/3 text-md font-medium text-white text-justify">
        {overview}
      </p>
      <div className="flex w-1/4 mt-2">
        <button
          className="border border-white text-black bg-white w-32 h-10 text-center rounded-md  font-semibold hover:bg-opacity-70 hover:bg-gray-500 hover:text-white"
          onClick={() =>
            window.open(
              "https://www.youtube.com/embed/" +
                trailerVideo?.key +
                "?&autoplay=1&mute=1&loop=1",
              "_blank"
            )
          }
        >
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white w-32 h-10 text-center rounded-md bg-opacity-70 font-semibold ml-5 hover:bg-gray-900 hover:text-white">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
