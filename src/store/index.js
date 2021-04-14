import Vue from "vue";
import Vuex from "vuex";
import movies from "../assets/movies.json";
import {
  STATE,
  GETTERS,
  MUTATIONS,
  ACTIONS,
  EMPTY_STRING,
  DEFAULT_SORT_OPTION,
  DEFAULT_SEARCH_OPTION
} from "@/store/storeConstants";
import { TITLE_OPTION, GENRE_OPTION } from "@/core/constants";
import { comparator } from "@/store/comparator";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    [STATE.MOVIES]: movies,
    [STATE.SEARCH_MOVIES]: movies,
    [STATE.SIMILAR_MOVIES]: movies,
    [STATE.SEARCH_QUERY]: EMPTY_STRING,
    [STATE.SEARCH_OPTION]: DEFAULT_SEARCH_OPTION,
    [STATE.SORT_OPTION]: DEFAULT_SORT_OPTION,
    [STATE.SIMILAR_MOVIE_GENRE]: EMPTY_STRING
  },
  getters: {
    [GETTERS.GET_MOVIES_COUNT]: function(state) {
      return state[STATE.SEARCH_MOVIES].length;
    },
    [GETTERS.GET_MOVIE_BY_ID]: function(state) {
      return id => state[STATE.MOVIES].find(movie => movie.id === parseInt(id));
    },
    [GETTERS.GET_SEARCH_OPTION]: function(state) {
      return state[STATE.SEARCH_OPTION];
    },
    [GETTERS.GET_SORT_OPTION]: function(state) {
      return state[STATE.SORT_OPTION];
    },
    [GETTERS.GET_SEARCH_MOVIES]: function(state) {
      return state[STATE.SEARCH_MOVIES].sort(
        comparator[state[STATE.SORT_OPTION]]
      );
    },
    [GETTERS.GET_SIMILAR_MOVIES]: function(state) {
      return state[STATE.SIMILAR_MOVIES].filter(movie =>
        movie.genres
          .map(genre => genre.toLowerCase())
          .includes(state[STATE.SIMILAR_MOVIE_GENRE])
      );
    }
  },
  mutations: {
    [MUTATIONS.UPDATE_SEARCH_QUERY](state, query) {
      state[STATE.SEARCH_QUERY] = query;
    },
    [MUTATIONS.UPDATE_SEARCH_OPTION](state, option) {
      state[STATE.SEARCH_OPTION] = option;
    },
    [MUTATIONS.UPDATE_SEARCH_MOVIE](state, movies) {
      state[STATE.SEARCH_MOVIES] = movies;
    },
    [MUTATIONS.UPDATE_SORT_OPTION](state, option) {
      state[STATE.SORT_OPTION] = option;
    },
    [MUTATIONS.UPDATE_SIMILAR_MOVIES_GENRE](state, genre) {
      state[STATE.SIMILAR_MOVIE_GENRE] = genre;
    }
  },
  actions: {
    [ACTIONS.UPDATE_SEARCH_QUERY]({ commit }, searchQuery) {
      commit(MUTATIONS.UPDATE_SEARCH_QUERY, searchQuery);
    },
    [ACTIONS.UPDATE_SEARCH_OPTION]({ commit }, searchOption) {
      commit(MUTATIONS.UPDATE_SEARCH_OPTION, searchOption);
    },
    [ACTIONS.UPDATE_SORT_OPTION]({ commit }, sortOption) {
      commit(MUTATIONS.UPDATE_SORT_OPTION, sortOption);
    },
    [ACTIONS.UPDATE_SIMILAR_MOVIES_GENRE]({ commit }, genre) {
      commit(MUTATIONS.UPDATE_SIMILAR_MOVIES_GENRE, genre);
    },
    [ACTIONS.SEARCH_MOVIES]({ commit }) {
      let searchedMovies;
      if (this.state[STATE.SEARCH_OPTION] === TITLE_OPTION) {
        searchedMovies = movies.filter(movie =>
          movie.title.toLowerCase().includes(this.state[STATE.SEARCH_QUERY])
        );
      } else if (this.state[STATE.SEARCH_OPTION] === GENRE_OPTION) {
        searchedMovies = movies.filter(movie =>
          movie.genres
            .map(value => value.toLowerCase())
            .includes(this.state[STATE.SEARCH_QUERY])
        );
      }

      commit(MUTATIONS.UPDATE_SEARCH_MOVIE, searchedMovies);
    }
  },
  modules: {}
});
