import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import dataFormattingPlugin from "@/plugins/dataFormatting";

import "./app.scss";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(dataFormattingPlugin);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
