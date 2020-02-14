import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from "./views/Dashboard";
import AdminPage from "./views/AdminPage";
import LoginPage from "./views/containers/LoginPage";
import UsersPage from "./views/containers/UsersPage";
import RegisterPage from "./views/containers/RegisterPage";
import ValidateForm from "./components/forms/ValidateForm";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/admin/dashboard'
	},
	{
		path: '/admin',
		component: AdminPage,
		redirect: Dashboard,
		children: [
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: Dashboard
			},
			{
				path: 'users',
				component: UsersPage,
				children: [
					{
						path: 'login',
						name: 'LoginPage',
						component: LoginPage
					},
          {
            path: 'validate',
            name: 'ValidateForm',
            component: ValidateForm
          },
					{
						path: 'register/complete/:token',
						name: 'RegisterPage',
						component: RegisterPage
					}
				]
			}
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
