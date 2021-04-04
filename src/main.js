import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "./app.scss";
import router from "./router";
import { parseYear, getOneGenre, parseGenre, parseRating } from "./filters";

Vue.config.productionTip = false;

Vue.filter("parseYear", parseYear);
Vue.filter("getOneGenre", getOneGenre);
Vue.filter("parseGenre", parseGenre);
Vue.filter("parseRating", parseRating);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
