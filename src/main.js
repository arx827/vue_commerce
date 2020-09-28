import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import "bootstrap";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/bus";
import currencyFilter from "@/filters/currency";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;

Vue.component("Loading", Loading);
Vue.filter("currency", currencyFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    console.log("這裡需要驗證");
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then(response => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: "/Signin"
        });
      }
    });
  } else {
    next();
  }
});
