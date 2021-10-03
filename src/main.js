import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { SpinnerPlugin, FormInputPlugin, ToastPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(SpinnerPlugin)
Vue.use(FormInputPlugin)
Vue.use(ToastPlugin)

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
