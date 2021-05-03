import Vue from "vue";
import Vuex from "vuex";
import movies from "@/store/modules/movies";
import controls from "@/store/modules/controls";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { movies, controls }
});
