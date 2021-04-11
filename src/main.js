import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "./app.scss";
import router from "./router";
import { FILTERS } from "@/filters/filters";
import filters from "./filters";

Vue.config.productionTip = false;

Vue.filter(FILTERS.PARSE_YEAR, filters[FILTERS.PARSE_YEAR]);
Vue.filter(FILTERS.GET_ONE_GENRE, filters[FILTERS.GET_ONE_GENRE]);
Vue.filter(FILTERS.PARSE_GENRES, filters[FILTERS.PARSE_GENRES]);
Vue.filter(FILTERS.PARSE_RATING, filters[FILTERS.PARSE_RATING]);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
