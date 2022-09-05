import Vuex from "vuex";
import Vue from 'vue'
Vue.use(Vuex)
export default () => new Vuex.Store({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  getters: {
    // isLoggedIn(state) {
    //   return !!state.token;
    // },
    // isAuthenticated(state) {
    //   return state.auth.loggedIn;
    // },
    // loggedInUser(state) {
    //   return state.auth.user
    // }
  },
});