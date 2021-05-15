import {
  GENRE_OPTION,
  RATING_OPTION,
  RELEASE_DATE_OPTION,
  TITLE_OPTION
} from "@/core/constants";

const BASE_URL = "https://react-cdp-api.herokuapp.com/";
const DEFAULT_TIME_OUT = 3000;
const MOVIES_ENDPOINT = "movies";
const DEFAULT_SORT_ORDER = "desc";
const DEFAULT_SEARCH_LIMIT = 6;
const SORT_OPTIONS = {
  [RELEASE_DATE_OPTION]: "release_date",
  [RATING_OPTION]: "vote_average"
};
const SEARCH_OPTIONS = {
  [TITLE_OPTION]: "title",
  [GENRE_OPTION]: "genres"
};

export {
  BASE_URL,
  MOVIES_ENDPOINT,
  SORT_OPTIONS,
  SEARCH_OPTIONS,
  DEFAULT_SORT_ORDER,
  DEFAULT_SEARCH_LIMIT,
  DEFAULT_TIME_OUT
};
