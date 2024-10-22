import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    mostPopularMovies: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.mostPopularMovies = action.payload;
    },
  },
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
