import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		status: '',
		token: localStorage.getItem('token') || '',
		user: {}
	},
	mutations: {
		auth_request(state) {
			state.status = 'loading'
		},
		auth_success(state, token, user) {
			state.status = 'success';
			state.token = token;
			state.user = user;
		},
		auth_error(state) {
			state.status = 'error'
		},
		logout(state) {
			state.status = '';
			state.token = '';
			state.user = {};
		}
	},
	actions: {
		login({commit}, user) {
			return new Promise((resolve, reject) => {
				commit('auth_request');
				Axios({ url: '/auth/login', data: user, method: 'POST' })
					.then(response => {
						if (!response.data.auth) {
							commit('auth_error');
							localStorage.removeItem('token');
							delete Axios.defaults.headers.common['x-access-token'];
							reject(response.data);
						}

						const user = response.data.user;
						const token = user.secret.token;

						commit('auth_success', token, user);
						localStorage.setItem('token', token);
						localStorage.setItem('user', JSON.stringify(user));
						Axios.defaults.headers.common['x-access-token'] = token;
						resolve(response.data);
					})
			})
		},
		logout({commit}) {
			return new Promise((resolve) => {
				commit('logout');
				localStorage.removeItem('token');
				localStorage.removeItem('user');
				Axios({ url: '/auth/logout', method: 'POST' })
					.then(resp => {
						delete Axios.defaults.headers.common['x-access-token'];
						resolve(resp);
					})
			})
		}
	},
	getters: {
		isLoggedIn: state => !!state.token,
		currentUser: state => !!state.user,
		authStatus: state => state.status
	}
});
