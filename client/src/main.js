/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import auth from './auth'
import firebase from './firebase'

Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});

