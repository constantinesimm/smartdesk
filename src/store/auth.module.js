import ls from '../plugin/ls-secure';
import httpClient from '../plugin/httpClient';
import Axios from "axios";

const emptyState = '';
const initialState = ls.getItem('sd-auth__secured') ? ls.getItem('sd-auth__secured') : emptyState;

/*
  state object example
{
  status: {
    temp: null,             request / success / error
    allowPrivate: false    true / false
  },
  session: {
    token: null,            4nsdvcBx4xPmm1ylJT90Nq1W2s0Qu8EX/jGJwPGhGCXk+DP3HN9SxSmGOIA9ZYlr5WpsKUgSc05IFL1tr4jDb5M8zkLymKbrgX1b9KSN7/h+0pW8J7NuAus2HpTI3Fl7bZhPPrChfgmFutRyu4owN1BqelrfFPYAP
    expires: null           1583959650234
  },
  user: {}                  user object from DB exclud secret key
}

 */

export const auth = {
  namespaced: true,
  state: ls.getItem('sd-auth__secured') ? ls.getItem('sd-auth__secured') : { status: { temp: null, allowPrivate: false }, session: { token: null, expires: null }, user: {} },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('request');

        Axios
          .post('http://localhost:3000/api/users/login', user)
          .then(response => {
            commit('success', response.data);

            ls.setItem('sd-auth__secured', this.state);
            Axios.defaults.headers.common['X-Access-Token'] = response.data.token;

            resolve(response.data);
          })
          .catch(error => {
            commit('error');

            delete Axios.defaults.headers.common['X-Access-Token'];
            ls.removeItem('sd-auth__secured');
            reject(error.response.data);
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve,reject) => {
        commit('request');

        Axios
          .post('http://localhost:3000/api/users/logout')
          .then(response => {
            commit('logout');

            delete Axios.defaults.headers.common['X-Access-Token'];
            ls.removeItem('sd-auth__secured');

            resolve(response.data)
          })
          .catch(error => {
            commit('error');

            delete Axios.defaults.headers.common['X-Access-Token'];
            ls.removeItem('sd-auth__secured');

            reject(error.response.data);
          })
      });


      ls.removeItem('sd-auth__secured');
      delete Axios.defaults.headers.common['X-Access-Token']
    }
  },
  mutations: {
    request(state) {
      state.status.temp = 'pending';
    },
    success(state, payload) {
      state.status = { temp: 'success', allowPrivate: true };
      state.session = { token: payload.token, expires: payload.expires };
      state.user = payload.user;
    },
    error(state) {
      state.status = { temp: 'error', allowPrivate: false };
      state.session = { token: null, expires: null };
      state.user = {};
    },
    logout(state) {
      state.status = { temp: null, allowPrivate: false };
      state.session = { token: null, expires: null };
      state.user = {};
    }
  },
  getters: {
    isLoggedIn: state => state['status'].allowPrivate && Date.now() < state['session'].expires,
    isAdminRole: state => state.user.access['role'] === 'admin'
  }
};
