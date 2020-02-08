import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from "../views/Dashboard";
import AdminPage from "../views/AdminPage";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/admin/dashboard'
    },
	{
		path: '/admin',
		component: AdminPage,
		children: [
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: Dashboard
			}
		]
	}
];

const router = new VueRouter({
  	mode: 'history',
  	base: process.env.BASE_URL,
  	routes,
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
});

export default router;
