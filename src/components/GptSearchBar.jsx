import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
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
      const promiseArray = gptMoviesList.map((movie) =>
        fetchMoviesFromTmdb(movie)
      );
      const tmdbResponse = await Promise.all(promiseArray);
      console.log(tmdbResponse);
      dispatch(
        addGptMoviesResult({
          movieList: tmdbResponse,
          movieResultsName: searchResults,
        })
      );
    } catch (error) {
      console.error("Error generating content:", error);
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
          className="px-10 py-2 m-4 bg-white rounded-sm col-span-9"
          placeholder={lang[langKey]?.gptSearchplaceHolder}
        />
        <button
          className="bg-red-700 text-white py-2 px-2 col-span-3 m-4"
          onClick={handleGeminiSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
