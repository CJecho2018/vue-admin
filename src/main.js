import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import VueQuillEditor from "vue-quill-editor";

import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(ElementUI);

// Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// router.beforeEach((to, from, next) => {
//   let username = localStorage.getItem("ms-login");
//   return username
// });
