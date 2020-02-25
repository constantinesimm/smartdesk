import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', //set default locale
  fallbackLocale: 'uk'
});

export default i18n;
