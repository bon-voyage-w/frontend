import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// bootstrap vue
Vue.use(BootstrapVue);
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@/api/lib/fontAwesomeIcon.js"; // fontAwesomeIcon.js 불러옴

require("pretty-checkbox/src/pretty-checkbox.scss");
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
