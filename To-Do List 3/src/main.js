import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue)

Vue.config.productionTip = false;

const config = {
}
firebase.initializeApp(config);

export const auth =  firebase.auth();
export const db = firebase.firestore();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
