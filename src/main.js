import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.prototype.$http = axios;
const token = localStorage.getItem("jwt");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

Vue.config.productionTip = false;
Vue.use(Vuelidate);
new Vue({
  router,
  store,
  vuetify,
  axios,
  render: (h) => h(App),
}).$mount("#app");
