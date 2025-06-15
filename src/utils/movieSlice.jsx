import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    mostPopularMovies: null,
    trailerVideo: null,
    topRatedMovies: null,
    nowPlayingMovies: null,
    selectedMovie: null,
    isDialogOpen: false,
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
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    openDialog: (state) => {
      state.isDialogOpen = true;
    },
    closeDialog: (state) => {
      state.isDialogOpen = false;
    },
  },
});

export const {
  addMovie,
  addTrailer,
  addTopRatedMovies,
  addNowPlaying,
  setSelectedMovie,
  openDialog,
  closeDialog,
} = movieSlice.actions;

export default movieSlice.reducer;