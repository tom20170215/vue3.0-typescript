import Vue from "vue";

import VueIconFont from "vue-icon-font-pro";

import "normalize.css";

import App from "./App.vue";
import router from "./router";
import store from "./store/";
import "@/assets/iconfont.js";

Vue.config.productionTip = false;
Vue.use(VueIconFont);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
