import { TITLE_OPTION, RELEASE_DATE_OPTION } from "@/core/constants";

export const STATE = {
  MOVIES: "movies",
  SEARCH_MOVIES: "searchMovies",
  SIMILAR_MOVIES: "similarMovies",
  SEARCH_QUERY: "searchQuery",
  SEARCH_OPTION: "searchOption",
  SORT_OPTION: "sortOption",
  SIMILAR_MOVIE_GENRE: "similarMovieGenre",
  MOVIE_SHOWN: "moviesShown"
};

export const GETTERS = {
  GET_MOVIES_COUNT: "moviesCount",
  GET_MOVIE_BY_ID: "getMovieById",
  GET_SEARCH_OPTION: "searchOption",
  GET_SORT_OPTION: "sortOption",
  GET_SEARCH_MOVIES: "searchMovies",
  GET_SIMILAR_MOVIES: "similarMovies",
  GET_SEARCH_QUERY: "searchQuery",
  GET_SIMILAR_MOVIE_GENRE: "similarMovieGenre",
  IS_LOAD_MORE_BUTTON_SHOWN: "isLoadMoreButtonShown",
  MOVIE_SHOWN: "moviesShown"
};

export const MUTATIONS = {
  UPDATE_SEARCH_QUERY: "UPDATE_SEARCH_QUERY",
  UPDATE_SEARCH_OPTION: "UPDATE_SEARCH_OPTION",
  UPDATE_SEARCH_MOVIE: "UPDATE_SEARCH_MOVIE",
  UPDATE_SORT_OPTION: "UPDATE_SORT_OPTION",
  UPDATE_SIMILAR_MOVIES_GENRE: "UPDATE_SIMILAR_MOVIES_GENRE",
  UPDATE_MOVIES_SHOWN: "UPDATE_MOVIES_SHOWN"
};

export const ACTIONS = {
  UPDATE_SEARCH_QUERY: "updateSearchQuery",
  UPDATE_SEARCH_OPTION: "updateSearchOption",
  UPDATE_SORT_OPTION: "updateSortOption",
  UPDATE_SIMILAR_MOVIES_GENRE: "updateSimilarMoviesGenre",
  SEARCH_MOVIES: "searchMovies",
  UPDATE_MOVIES_SHOWN: "updateMoviesShown"
};

export const EMPTY_STRING = "";
export const DEFAULT_SEARCH_OPTION = TITLE_OPTION;
export const DEFAULT_SORT_OPTION = RELEASE_DATE_OPTION;
