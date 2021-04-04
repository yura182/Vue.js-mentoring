import Vue from "vue";
import Vuex from "vuex";
import movies from "../assets/movies.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies,
    filmTitle: "Back To The Future"
  },
  getters: {
    moviesCount(state) {
      return state.movies.length;
    },
    findMovieById(state) {
      return id => state.movies.find(movie => movie.id === parseInt(id));
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
