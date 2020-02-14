/* Styles */
import './services/vee-validate';

/* Core */
import Vue from 'vue';
import Buefy from "buefy";
import './assets/flatly/bulmaswatch.scss';

/* Router & Store */
import router from './router';
import store from './store';

/* Vue Main component */
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(Buefy, {
	defaultIconPack: 'fas',
  defaultFieldLabelPosition: 'on-border',
	defaultToastDuration: 5000,
	defaultToastPosition: 'is-top'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
