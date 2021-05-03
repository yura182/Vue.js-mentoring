import { ACTIONS, GETTERS, MUTATIONS, STATE } from "@/store/storeConstants";
import { comparator } from "@/store/comparator";
import { LOAD_MOVIES_INCREMENT } from "@/core/constants";
import ApiService from "@/core/api/api";

export default {
  state: {
    [STATE.MOVIES]: [],
    [STATE.SEARCH_MOVIES]: [],
    [STATE.SIMILAR_MOVIES]: [],
    [STATE.IS_MOVIE_BY_ID_LOADED]: false,
    [STATE.CURRENT_MOVIE]: Object,
    [STATE.MOVIES_COUNT]: 0
  },

  getters: {
    [GETTERS.GET_MOVIES_COUNT]: function(state) {
      return state[STATE.MOVIES_COUNT];
    },
    [GETTERS.GET_MOVIE_BY_ID]: function(state) {
      return id => state[STATE.MOVIES].find(movie => movie.id === parseInt(id));
    },
    [GETTERS.GET_SEARCH_MOVIES]: function(state, rootState) {
      return state[STATE.SEARCH_MOVIES]
        .sort(comparator[rootState[STATE.SORT_OPTION]])
        .slice(0, rootState[STATE.MOVIE_SHOWN]);
    },
    [GETTERS.GET_SIMILAR_MOVIES]: function(state) {
      return state[STATE.SIMILAR_MOVIES];
    },
    [GETTERS.CURRENT_MOVIE]: function(state) {
      return state[STATE.CURRENT_MOVIE];
    },
    [GETTERS.IS_MOVIE_BY_ID_LOADED]: function(state) {
      return state[STATE.IS_MOVIE_BY_ID_LOADED];
    }
  },
  mutations: {
    [MUTATIONS.UPDATE_SEARCH_MOVIE](state, movies) {
      state[STATE.SEARCH_MOVIES] = movies;
    },
    [MUTATIONS.UPDATE_CURRENT_MOVIE](state, movie) {
      state[STATE.CURRENT_MOVIE] = movie;
    },
    [MUTATIONS.UPDATE_IS_MOVIE_BY_ID_LOADED](state, isLoaded) {
      state[STATE.IS_MOVIE_BY_ID_LOADED] = isLoaded;
    },
    [MUTATIONS.UPDATE_SIMILAR_MOVIES](state, movies) {
      state[STATE.SIMILAR_MOVIES] = movies;
    },
    [MUTATIONS.UPDATE_MOVIES_COUNT](state, count) {
      state[STATE.MOVIES_COUNT] = count;
    },
    [MUTATIONS.ADD_MOVIES](state, moviesToAdd) {
      state[STATE.SEARCH_MOVIES].push(...moviesToAdd);
    }
  },
  actions: {
    [ACTIONS.SEARCH_FILMS]({ dispatch, commit, rootGetters }) {
      commit(MUTATIONS.UPDATE_SEARCH_MOVIE, []);
      dispatch(ACTIONS.START_API_CALL);
      ApiService.getInitialMovies(
        rootGetters[GETTERS.GET_SORT_OPTION],
        rootGetters[GETTERS.GET_SEARCH_OPTION],
        rootGetters[GETTERS.GET_SEARCH_QUERY]
      )
        .then(movies => {
          commit(MUTATIONS.UPDATE_SEARCH_MOVIE, movies.data);
          commit(MUTATIONS.UPDATE_MOVIES_COUNT, movies.total);
          commit(MUTATIONS.RESET_MOVIES_SHOWN);
        })
        .catch(error => {
          commit(MUTATIONS.UPDATE_IS_API_ERROR, true);
          console.log(error);
        })
        .finally(() => commit(MUTATIONS.UPDATE_IS_DATA_LOADING, false));
    },
    [ACTIONS.FIND_MOVIE_BY_ID]({ dispatch, commit }, id) {
      commit(MUTATIONS.UPDATE_SIMILAR_MOVIES, []);
      commit(MUTATIONS.UPDATE_IS_MOVIE_BY_ID_LOADED, false);
      dispatch(ACTIONS.START_API_CALL);
      ApiService.getMovieById(id)
        .then(movie => commit(MUTATIONS.UPDATE_CURRENT_MOVIE, movie))
        .catch(error => {
          commit(MUTATIONS.UPDATE_IS_API_ERROR, true);
          console.log(error);
        })
        .finally(() => {
          commit(MUTATIONS.UPDATE_IS_MOVIE_BY_ID_LOADED, true);
          commit(MUTATIONS.UPDATE_IS_DATA_LOADING, false);
        });
    },
    [ACTIONS.SIMILAR_MOVIES]({ dispatch, commit, rootGetters }) {
      dispatch(ACTIONS.START_API_CALL);
      ApiService.getSimilarMovies(rootGetters[GETTERS.GET_SIMILAR_MOVIE_GENRE])
        .then(movies => commit(MUTATIONS.UPDATE_SIMILAR_MOVIES, movies.data))
        .catch(error => {
          commit(MUTATIONS.UPDATE_IS_API_ERROR, true);
          console.log(error);
        })
        .finally(() => commit(MUTATIONS.UPDATE_IS_DATA_LOADING, false));
    },
    [ACTIONS.LOAD_MORE_MOVIES]({ dispatch, commit, rootGetters }) {
      dispatch(ACTIONS.START_API_CALL);
      ApiService.getInitialMovies(
        rootGetters[GETTERS.GET_SORT_OPTION],
        rootGetters[GETTERS.GET_SEARCH_OPTION],
        rootGetters[GETTERS.GET_SEARCH_QUERY],
        LOAD_MOVIES_INCREMENT,
        rootGetters[GETTERS.MOVIE_SHOWN]
      )
        .then(movies => {
          commit(MUTATIONS.ADD_MOVIES, movies.data);
        })
        .catch(error => {
          commit(MUTATIONS.UPDATE_IS_API_ERROR, true);
          commit(MUTATIONS.ROLL_BACK_MOVIES_SHOWN);
          console.log(error);
        })
        .finally(() => commit(MUTATIONS.UPDATE_IS_DATA_LOADING, false));
    }
  }
};
