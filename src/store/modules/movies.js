import { ACTIONS, GETTERS, MUTATIONS, STATE } from "@/store/storeConstants";
import movies from "@/assets/movies.json";
import { comparator } from "@/store/comparator";
import { GENRE_OPTION, TITLE_OPTION } from "@/core/constants";

export default {
  state: {
    [STATE.MOVIES]: movies,
    [STATE.SEARCH_MOVIES]: movies,
    [STATE.SIMILAR_MOVIES]: movies
  },

  getters: {
    [GETTERS.GET_MOVIES_COUNT]: function(state) {
      return state[STATE.SEARCH_MOVIES].length;
    },
    [GETTERS.GET_MOVIE_BY_ID]: function(state) {
      return id => state[STATE.MOVIES].find(movie => movie.id === parseInt(id));
    },
    [GETTERS.GET_SEARCH_MOVIES]: function(state, rootState) {
      return state[STATE.SEARCH_MOVIES]
        .sort(comparator[rootState[STATE.SORT_OPTION]])
        .slice(0, rootState[STATE.MOVIE_SHOWN]);
    },
    [GETTERS.GET_SIMILAR_MOVIES]: function(state, rootGetters) {
      return state[STATE.SIMILAR_MOVIES].filter(movie =>
        movie.genres
          .map(genre => genre.toLowerCase())
          .includes(rootGetters[GETTERS.GET_SIMILAR_MOVIE_GENRE])
      );
    }
  },
  mutations: {
    [MUTATIONS.UPDATE_SEARCH_MOVIE](state, movies) {
      state[STATE.SEARCH_MOVIES] = movies;
    }
  },
  actions: {
    [ACTIONS.SEARCH_MOVIES]({ commit, rootGetters }) {
      let searchedMovies;
      if (rootGetters[GETTERS.GET_SEARCH_OPTION] === TITLE_OPTION) {
        searchedMovies = movies.filter(movie =>
          movie.title
            .toLowerCase()
            .includes(rootGetters[GETTERS.GET_SEARCH_QUERY])
        );
      } else if (rootGetters[GETTERS.GET_SEARCH_OPTION] === GENRE_OPTION) {
        searchedMovies = movies.filter(movie =>
          movie.genres
            .map(value => value.toLowerCase())
            .includes(rootGetters[GETTERS.GET_SEARCH_QUERY])
        );
      }

      commit(MUTATIONS.UPDATE_SEARCH_MOVIE, searchedMovies);
    }
  }
};
