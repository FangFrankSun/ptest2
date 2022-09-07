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
  actions: {
    // async nuxtServerInit ({ dispatch, commit, state }) {
    //  // const { access_token, refresh_token } = state.auth
  
    //   if (access_token && refresh_token) {
    //     try {
    //       // refresh the access token
    //       await dispatch('auth/refresh')
    //     } catch (e) {
    //       // catch any errors and automatically logout the user
    //       await dispatch('auth/logout')
    //     }
    //   }
    // },
  },
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
export const actions = {
  // https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action
  // automatically refresh the access token on the initial request to the server, if possible
  async nuxtServerInit ({ dispatch, commit, state }) {
    const { access_token, refresh_token } = state.auth

    if (access_token && refresh_token) {
      try {
        // refresh the access token
        await dispatch('auth/refresh')
      } catch (e) {
        // catch any errors and automatically logout the user
        await dispatch('auth/logout')
      }
    }
  },
}