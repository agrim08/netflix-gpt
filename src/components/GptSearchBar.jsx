import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const [loading, setIsLoading] = useState(false);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const fetchMoviesFromTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    return jsonData.results;
  };
  const handleGeminiSearchClick = async () => {
    setIsLoading(true);
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt =
      searchText.current.value +
      "only give the names of movies and not a single extra information, only give strict 5 recommendations, comma seperated";
    try {
      const geminiResult = await model?.generateContent(prompt);
      const gptMoviesList =
        geminiResult.response.candidates[0].content.parts[0].text.split(",");
      const searchResults =
        geminiResult.response.candidates[0].content.parts[0].text;
      const promiseArray = gptMoviesList.map((movie, index) =>
        fetchMoviesFromTmdb(movie)
      );
      const tmdbResponse = await Promise.all(promiseArray);
      dispatch(
        addGptMoviesResult({
          movieList: tmdbResponse,
          movieResultsName: searchResults,
        })
      );
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const langKey = useSelector((store) => store?.config?.lang);
  return (
    <div className=" pt-[12%] flex justify-center">
      <form
        className="w-1/2 mx-6 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="px-10 py-2 my-4 ml-2 bg-white rounded-tl-sm col-span-9"
          placeholder={lang[langKey]?.gptSearchplaceHolder}
          onChange={(e) => {
            if (e.key === "Enter") handleGeminiSearchClick();
          }}
        />
        <button
          className="bg-red-700 text-white py-2 px-2 mx-[3px] text-md col-span-3 my-4 mr-2  hover:bg-red-400 focus:border-black rounded-r-sm"
          onClick={handleGeminiSearchClick}
        >
          {loading ? <span>Loading...</span> : lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
