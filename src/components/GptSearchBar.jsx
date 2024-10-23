import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className=" pt-[12%] flex justify-center">
      <form
        className="w-1/2 mx-6 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="px-10 py-2 m-4 bg-white rounded-sm col-span-9"
          placeholder={lang[langKey]?.gptSearchplaceHolder}
        />
        <button className="bg-red-700 text-white py-2 px-2 col-span-3 m-4">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
