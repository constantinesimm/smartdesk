import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    redirect: '/admin/dashboard'
  },
  {
    path: '/admin',
    name: 'AdminIndex',
    redirect: '/admin/dashboard',
    component: () => import('./views/index/AdminIndex'),
    children: [
      {
        path: 'account',
        name: 'AccountIndex',
        redirect: '/admin/account/login',
        component: () => import('./views/index/AccountIndex'),
        children: [
          {
            path: ':user_id/password/change/:token',
            name: 'ChangePassword',
            meta: { layout: 'default' },
            component: () => import('./views/account/ChangePassword')
          },
          {
            path: 'login',
            name: 'Login',
            meta: { layout: 'default' },
            component: () => import('./views/account/Login')
          },
          {
            path: 'register',
            name: 'Register',
            meta: { layout: 'default' },
            component: () => import('./views/account/Register')
          },
          {
            path: ':user_id/register/complete/:token',
            name: 'Register',
            meta: { layout: 'default' },
            component: () => import('./views/account/RegisterComplete')
          }
        ]
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { layout: 'admin' },
        component: () => import('./views/admin/Dashboard')
      },
      {
        path: 'users'

      }
    ]
  }
];

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;

