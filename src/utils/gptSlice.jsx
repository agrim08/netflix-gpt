import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieResultsName: null,
    movieList: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult: (state, action) => {
      const { movieResultsName, movieList } = action.payload;
      state.movieResultsName = movieResultsName;
      state.movieList = movieList;
    },
  },
});

export const { toggleGptSearchView, addGptMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;
