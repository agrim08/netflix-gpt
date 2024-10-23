import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    mostPopularMovies: [],
    trailerVideo: null,
    nowPlayingMovies: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.mostPopularMovies = action.payload;
    },
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addMovie, addTrailer, addNowPlaying } = movieSlice.actions;
export default movieSlice.reducer;
