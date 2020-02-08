/* Styles */
import '@/assets/scss/main.scss';

/* Core */
import Vue from 'vue';
import Buefy from "buefy";

/* Router & Store */
import router from './router';
import store from './store';

/* Vue Main component */
import App from './App.vue'

/* Vue. Component in recursion */
import AsideMenuList from './components/aside/AsideMenuList'

/* Collapse mobile aside menu on route change */
/*
router.afterEach(() => {
	store.commit('asideMobileStateToggle', false)
})
 */

Vue.config.productionTip = false;

/* These components are used in recursion algorithm */
Vue.component('AsideMenuList', AsideMenuList);

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
