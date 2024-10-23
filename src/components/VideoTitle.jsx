import React from "react";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className=" w-full h-[100%] bg-black bg-opacity-35 absolute flex flex-col pt-52 gap-4 pl-12 items-start ">
      <h1 className="text-5xl font-bold text-white">{original_title}</h1>
      <p className="w-1/3 text-xl font-medium text-white">{overview}</p>
      <div className="flex justify-evenly w-1/4 mt-5">
        <button className="border border-white text-black bg-white w-32 h-10 text-center rounded-md  font-semibold hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white w-32 h-10 text-center rounded-md bg-opacity-70 font-semibold">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
