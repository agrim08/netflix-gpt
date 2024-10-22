import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { mostPopularMovies: [], trailerVideo: null },
  reducers: {
    addMovie: (state, action) => {
      state.mostPopularMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addMovie, addTrailer } = movieSlice.actions;
export default movieSlice.reducer;
