import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import "bootstrap";
import VeeValidate from "vee-validate";
import zhTWValidate from "vee-validate/dist/locale/zh_TW";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/bus";
import currencyFilter from "@/filters/currency";
import dateFilter from "./filters/date";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;

VeeValidate.Validator.localize("zh_TW", zhTWValidate);
Vue.use(VeeValidate);

Vue.component("Loading", Loading);
Vue.filter("currency", currencyFilter);
Vue.filter("date", dateFilter);

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
          path: "/login"
        });
      }
    });
  } else {
    next();
  }
});
