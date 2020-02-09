/* Styles */
import './assets/scss/main.scss';

/* Core */
import Vue from 'vue';
import Buefy from "buefy";

/* Router & Store */
import router from './router';
import store from './store';

/* Vue Main component */
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(Buefy, {
	defaultIconPack: 'fas',
	defaultToastDuration: 5000,
	defaultToastPosition: 'is-top'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
