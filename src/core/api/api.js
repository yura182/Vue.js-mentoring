import axios from "axios";
import {
  BASE_URL,
  MOVIES_ENDPOINT,
  SEARCH_OPTIONS,
  SORT_OPTIONS,
  DEFAULT_SORT_ORDER,
  DEFAULT_SEARCH_LIMIT,
  DEFAULT_TIME_OUT
} from "@/core/api/constants";
import { GENRE_OPTION, SIMILAR_MOVIES_LIMIT } from "@/core/constants";
import router from "@/router";

const ApiService = {
  init() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.timeout = DEFAULT_TIME_OUT;
  },
  getMovies() {
    return axios.get(MOVIES_ENDPOINT).then(response => response.data);
  },
  getInitialMovies({ sortOption, limit = DEFAULT_SEARCH_LIMIT, offset } = {}) {
    const searchByFromRoute = router.currentRoute.query.searchBy;
    return axios
      .get(MOVIES_ENDPOINT, {
        params: {
          sortBy: SORT_OPTIONS[sortOption],
          searchBy: SEARCH_OPTIONS[searchByFromRoute],
          search: router.currentRoute.query.query,
          sortOrder: DEFAULT_SORT_ORDER,
          limit: limit,
          offset: offset
        }
      })
      .then(response => response.data);
  },
  getMovieById(id) {
    return axios.get(`movies/${id}`).then(response => response.data);
  },
  getSimilarMovies(genre) {
    return axios
      .get(MOVIES_ENDPOINT, {
        params: {
          searchBy: SEARCH_OPTIONS[GENRE_OPTION],
          search: genre,
          limit: SIMILAR_MOVIES_LIMIT
        }
      })
      .then(response => response.data);
  }
};
export default ApiService;
