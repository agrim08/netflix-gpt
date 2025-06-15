import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    mostPopularMovies: null,
    trailerVideo: null,
    topRatedMovies: null,
    nowPlayingMovies: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlaying: (state, action) => {
      state.mostPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addMovie, addTrailer, addTopRatedMovies, addNowPlaying } =
  movieSlice.actions;
export default movieSlice.reducer;
