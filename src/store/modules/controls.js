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
    [STATE.MOVIE_SHOWN]: DEFAULT_LOAD_MOVIES,
    [STATE.IS_DATA_LOADING]: true,
    [STATE.IS_API_ERROR]: false
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
    },
    [GETTERS.IS_DATA_LOADING]: function(state) {
      return state[STATE.IS_DATA_LOADING];
    },
    [GETTERS.IS_API_ERROR]: function(state) {
      return state[STATE.IS_API_ERROR];
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
    },
    [MUTATIONS.ROLL_BACK_MOVIES_SHOWN](state) {
      state[STATE.MOVIE_SHOWN] -= LOAD_MOVIES_INCREMENT;
    },
    [MUTATIONS.RESET_MOVIES_SHOWN](state) {
      state[STATE.MOVIE_SHOWN] = DEFAULT_LOAD_MOVIES;
    },
    [MUTATIONS.UPDATE_IS_DATA_LOADING](state, isLoading) {
      state[STATE.IS_DATA_LOADING] = isLoading;
    },
    [MUTATIONS.UPDATE_IS_API_ERROR](state, isError) {
      state[STATE.IS_API_ERROR] = isError;
    }
  },
  actions: {
    [ACTIONS.UPDATE_SIMILAR_MOVIES_GENRE]({ dispatch, commit }, genre) {
      commit(MUTATIONS.UPDATE_SIMILAR_MOVIES_GENRE, genre);
      dispatch(ACTIONS.SIMILAR_MOVIES);
    },
    [ACTIONS.UPDATE_SEARCH_QUERY]({ commit }, searchQuery) {
      commit(MUTATIONS.UPDATE_SEARCH_QUERY, searchQuery);
    },
    [ACTIONS.UPDATE_SEARCH_OPTION]({ commit }, searchOption) {
      commit(MUTATIONS.UPDATE_SEARCH_OPTION, searchOption);
    },
    [ACTIONS.UPDATE_SORT_OPTION]({ dispatch, commit }, sortOption) {
      commit(MUTATIONS.UPDATE_SORT_OPTION, sortOption);
      dispatch(ACTIONS.SEARCH_FILMS);
    },
    [ACTIONS.UPDATE_MOVIES_SHOWN]({ commit }) {
      commit(MUTATIONS.UPDATE_MOVIES_SHOWN);
    },
    [ACTIONS.START_API_CALL]({ commit }) {
      commit(MUTATIONS.UPDATE_IS_DATA_LOADING, true);
      commit(MUTATIONS.UPDATE_IS_API_ERROR, false);
    }
  }
};
