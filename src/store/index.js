import Vue from "vue";
import Vuex from "vuex";
import movies from "../assets/movies.json";
import { GETTERS } from "@/store/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    [GETTERS.MOVIES]: movies
  },
  getters: {
    [GETTERS.MOVIES_COUNT]: function(state) {
      return state[GETTERS.MOVIES].length;
    },
    [GETTERS.FIND_MOVIE_BY_ID]: function(state) {
      return id =>
        state[GETTERS.MOVIES].find(movie => movie.id === parseInt(id));
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
