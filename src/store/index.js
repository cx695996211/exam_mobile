import Vue from 'vue'
import Vuex from 'vuex'
import loginUser  from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginUser
  }
})
