import {
  ACTIONS,
  DEFAULT_SEARCH_OPTION,
  DEFAULT_SORT_OPTION,
  EMPTY_STRING,
  GETTERS,
  MUTATIONS,
  STATE
} from "@/store/storeConstants";
import { DEFAULT_LOAD_MOVIES, LOAD_MOVIES_INCREMENT } from "@/core/constants";

export default {
  state: {
    [STATE.SEARCH_QUERY]: EMPTY_STRING,
    [STATE.SEARCH_OPTION]: DEFAULT_SEARCH_OPTION,
    [STATE.SORT_OPTION]: DEFAULT_SORT_OPTION,
    [STATE.SIMILAR_MOVIE_GENRE]: EMPTY_STRING,
    [STATE.MOVIE_SHOWN]: DEFAULT_LOAD_MOVIES
  },

  getters: {
    [GETTERS.GET_SEARCH_OPTION]: function(state) {
      return state[STATE.SEARCH_OPTION];
    },
    [GETTERS.GET_SORT_OPTION]: function(state) {
      return state[STATE.SORT_OPTION];
    },
    [GETTERS.GET_SEARCH_QUERY]: function(state) {
      return state[STATE.SEARCH_QUERY];
    },
    [GETTERS.GET_SIMILAR_MOVIE_GENRE]: function(state) {
      return state[STATE.SIMILAR_MOVIE_GENRE];
    },
    [GETTERS.MOVIE_SHOWN]: function(state) {
      return state.moviesShown;
    },
    [GETTERS.IS_LOAD_MORE_BUTTON_SHOWN]: function(state, rootState) {
      return (
        rootState[GETTERS.GET_MOVIES_COUNT] > DEFAULT_LOAD_MOVIES &&
        state.moviesShown < rootState[GETTERS.GET_MOVIES_COUNT]
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
    [MUTATIONS.UPDATE_SORT_OPTION](state, option) {
      state[STATE.SORT_OPTION] = option;
    },
    [MUTATIONS.UPDATE_SIMILAR_MOVIES_GENRE](state, genre) {
      state[STATE.SIMILAR_MOVIE_GENRE] = genre;
    },
    [MUTATIONS.UPDATE_MOVIES_SHOWN](state) {
      state.moviesShown += LOAD_MOVIES_INCREMENT;
    }
  },
  actions: {
    [ACTIONS.UPDATE_SIMILAR_MOVIES_GENRE]({ commit }, genre) {
      commit(MUTATIONS.UPDATE_SIMILAR_MOVIES_GENRE, genre);
    },
    [ACTIONS.UPDATE_SEARCH_QUERY]({ commit }, searchQuery) {
      commit(MUTATIONS.UPDATE_SEARCH_QUERY, searchQuery);
    },
    [ACTIONS.UPDATE_SEARCH_OPTION]({ commit }, searchOption) {
      commit(MUTATIONS.UPDATE_SEARCH_OPTION, searchOption);
    },
    [ACTIONS.UPDATE_SORT_OPTION]({ commit }, sortOption) {
      commit(MUTATIONS.UPDATE_SORT_OPTION, sortOption);
    },
    [ACTIONS.UPDATE_MOVIES_SHOWN]({ commit }) {
      commit(MUTATIONS.UPDATE_MOVIES_SHOWN);
    }
  }
};
