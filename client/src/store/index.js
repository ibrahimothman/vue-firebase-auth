import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import secrets from './secrets'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    secrets
  }
})
