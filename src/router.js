import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import ls from './plugin/ls-secure';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    redirect: '/admin/dashboard'
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('./views/index/AdminIndex'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          layout: 'admin',
          title: 'Dashboard | SmartDesk Web Application',
          privateRoute: true
        },
        component: () => import('./views/pages/admin/dashboard/Dashboard')
      },
      {
        path: 'users',
        name: 'UsersIndex',
        redirect: '/admin/users/list/all',
        component: () => import('./views/index/UsersIndex'),
        children: [
          {
            path: 'list/all',
            name: 'UsersListAll',
            meta: {
              layout: 'admin',
              title: 'Users | SmartDesk Web Application',
              privateRoute: true
            },
            component: () => import('./views/pages/admin/users/ListAll')
          },
          {
            path: 'manage/import',
            name: 'UsersManualImport',
            meta: {
              layout: 'admin',
              title: 'Users Manage | SmartDesk Web Application',
              privateRoute: true
            },
            component: () => import('./views/pages/admin/users/ManualImport')
          }
        ]
      }
    ]
  },
  {
    path: '/users',
    redirect: '/users/login',
    component: () => import('./views/index/UsersIndex'),
    children: [
      {
        path: 'login',
        name: 'UserLogin',
        meta: {
          layout: 'default',
          title: 'Log In | SmartDesk Web Application',
          publicRoute: true
        },
        component: () => import('./views/pages/users/auth/Login')
      },
      {
        path: 'register/new',
        name: 'UserRegisterNew',
        meta: {
          layout: 'default',
          title: 'Register | SmartDesk Web Application',
          publicRoute: true
        },
        component: () => import('./views/pages/users/auth/Register')
      },
      {
        path: 'register/:userId/complete/:token',
        name: 'UserRegisterComplete',
        meta: {
          layout: 'default',
          title: 'Register Complete | SmartDesk Web Application',
          publicRoute: true
        },
        component: () => import('./views/pages/users/auth/RegisterComplete')
      },
      {
        path: 'password/:user_id/change/:token',
        name: 'UserChangePassword',
        meta: {
          layout: 'default',
          title: 'Change Password | SmartDesk Web Application',
          publicRoute: true
        },
        component: () => import('./views/pages/users/auth/ChangePassword')
      },
      {
        path: 'profile/:user_id',
        name: 'UserProfile',
        meta: {
          layout: 'admin',
          title: 'Profile | SmartDesk Web Application',
          privateRoute: true
        },
        component: () => import('./views/pages/users/profile/UserProfile-old')
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

router.beforeEach((to, from, next) => {
  //initialize store
  const cachedAuthState = ls.getItem('sd-auth__secured');

  console.log('cached', cachedAuthState)
  //setting page title
  if (to.matched.some(record => record.meta.title)) {
    document.title = to.meta.title || 'SmartDesk Web Application';
    next();
  }

  //route guard -> public
  if (to.matched.some(record => record.meta.publicRoute)) {
    console.log('in public guard', store.getters['secure/isLoggedIn'])

    if (store.getters['secure/isLoggedIn']) {
      next({
        path: from.fullPath
      })
    } else {
      next();
    }
  } else {
    next();
  }

  //route guard -> private
  if (to.matched.some(record => record.meta.privateRoute)) {
    console.log('in private guard', store.getters['secure/isLoggedIn'])
    if (!store.getters['secure/isLoggedIn']) {
      next({
        path: '/users/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

