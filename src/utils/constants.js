export const logo = "https://www.svgrepo.com/show/303196/netflix-2-logo.svg";

export const userAvatar =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const netflixBackgraound =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg";

export const MAIN_MOVIE_LOGO =
  "https://lumiere-a.akamaihd.net/v1/images/romulus_instagram_payoff_poster_united_kingdom_12_dd56170b.jpeg?region=0%2C275%2C800%2C450";

export const MOVIE_POSTER_CDN = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { itendifier: "en", name: "English" },
  { identifier: "hindi", name: "hindi" },
  { identifier: "span", name: "span" },
];

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const API_ENDPOINTS = {
  GET_POPULAR_MOVIES: "https://api.themoviedb.org/3/movie/popular?&page=4",
  GET_TRAILER: (id) =>
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
  GET_NOW_PLAYING: "https://api.themoviedb.org/3/movie/now_playing?&page=2",
  GET_TOP_RATED_MOVIES:
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
};

export const TRAILER = "Trailer";
