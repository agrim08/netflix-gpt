import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "../utils/movieSlice";
import { API_ENDPOINTS, API_OPTIONS, TRAILER } from "../utils/constants";

const MovieDialog = () => {
  const dispatch = useDispatch();
  const selectedMovie = useSelector((store) => store.movies.selectedMovie);
  const isDialogOpen = useSelector((store) => store.movies.isDialogOpen);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    if (selectedMovie) {
      getTrailer();
    }
  }, [selectedMovie]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && isDialogOpen) {
        dispatch(closeDialog());
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isDialogOpen, dispatch]);

  const getTrailer = async () => {
    const data = await fetch(
      API_ENDPOINTS.GET_TRAILER(selectedMovie.id),
      API_OPTIONS
    );
    const jsonData = await data?.json();
    const trailerVideos = jsonData?.results?.filter(
      (video) => video?.type === TRAILER
    );
    const trailer = trailerVideos?.length
      ? trailerVideos[0]
      : jsonData?.results[0];
    setTrailer(trailer);
  };

  if (!isDialogOpen || !selectedMovie) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-40 transition-opacity duration-500 ease-in-out ${
          isDialogOpen ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div
        className={`fixed bottom-0 left-0 w-full bg-gradient-to-b from-gray-900 to-black text-white rounded-t-3xl shadow-2xl z-50 transition-transform duration-500 ease-in-out ${
          isDialogOpen ? "translate-y-0" : "translate-y-full"
        } max-h-[90vh] flex flex-col overflow-hidden`}
      >
        <button
          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          onClick={() => dispatch(closeDialog())}
          aria-label="Close dialog"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row p-4 sm:p-6 pt-16 pb-8 gap-6 max-w-full sm:max-w-7xl mx-auto">
          <div className="w-full lg:w-2/3">
            {trailer ? (
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
                  title={selectedMovie.title || selectedMovie.original_title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="w-full aspect-video flex items-center justify-center bg-gray-800 rounded-lg">
                <svg
                  className="w-12 h-12 text-gray-400 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/3 flex flex-col space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {selectedMovie.title || selectedMovie.original_title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-6">
              {selectedMovie.overview}
            </p>
            <button
              className="mt-4 w-32 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 cursor-pointer"
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${trailer?.key}`,
                  "_blank"
                )
              }
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDialog;