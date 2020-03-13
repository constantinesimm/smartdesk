/* Core */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

/* Router & Store */
import router from './router';
import store from './store';

/* Plugins and Packages */
import options from './config';
import i18n from './plugin/locale/i18n';
import Vuelidate from "vuelidate";
import ls from './plugin/ls-secure';
import Axios from 'axios';

/* Vue Component & Layouts*/
import App from './App.vue';
import DefaultLayout from './views/layouts/defaultLayout';
import AdminLayout from './views/layouts/adminLayout';
import Toast from "vue-toastification";
import { ServerTable, ClientTable, Event } from 'vue-tables-2';
import './plugin/fraud-prevent';

/* Styles */
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/smartdesk-app.scss';
import './assets/scss/date-range.scss';
import './assets/scss/_toasts.scss';

/* Vue component layout */
Vue.component('default-layout', DefaultLayout);
Vue.component('admin-layout', AdminLayout);

//development mode notification
Vue.config.productionTip = process.env.NODE_ENV === 'development';

/* Global Event Bus */
Vue.prototype.$eventHub = new Vue();
Vue.prototype.$http = Axios;
Vue.prototype.$http.baseURL = options['apiBaseURL'];

if (ls.getItem('sd-auth__secured').secure) {
  Vue.prototype.$http.defaults.headers.common['X-Access-Token'] = ls.getItem('sd-auth__secured').secure.session['token'];
}

/* Global plugins */
ShardsVue.install(Vue);         //Shards UI KiT
Vue.use(Vuelidate);             //Validator
Vue.use(ClientTable);           //Data tables
Vue.use(Toast, options['toast']);

/* Define New Vue Instance */
new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
