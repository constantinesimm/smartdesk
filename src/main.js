/* Core */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

/* Router & Store */
import router from './router';
import store from './store';

/* Plugins and Packages */
import i18n from './plugin/locale/i18n';
import Vuelidate from "vuelidate";

/* Vue Component & Layouts*/
import App from './App.vue'
import DefaultLayout from './layouts/default-layout';
import AdminLayout from './layouts/admin-layout';

/* Styles */
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/smartdesk-app.scss';
import './assets/scss/date-range.scss';

/* Vue component layout */
Vue.component('default-layout', DefaultLayout);
Vue.component('admin-layout', AdminLayout);

/* Global Event Bus */
Vue.prototype.$eventHub = new Vue();
Vue.config.productionTip = process.env.NODE_ENV === 'development';

ShardsVue.install(Vue);
Vue.use(Vuelidate);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
