<template>
	<aside v-show="isAsideVisible" class="aside is-placed-left is-expanded">
		<div class="image">
			<a href="/">
				<img src="../../assets/image/logotype_w250h75.png" alt="SmartDesk App Logotype"/>
			</a>
		</div>
		<div class="menu is-menu-main">
			<aside-menu-list @menu-click="menuClick" :menu="menu"/>
		</div>
	</aside>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'AsideMenu',
		props: {
			menu: {
				type: Array,
				default: () => [
					{
						to: '/',
						iconPack: 'far',
						icon: 'chart-bar',
						label: 'Dashboard'
					},
					{
						label: 'Users',
						icon: 'users',
						menu: [
							{
								href: '/admin/users/list',
								icon: 'user-friends',
								label: 'List all'
							},
							{
								href: '#void',
								icon: 'users-cog',
								label: 'Manage'
							}
						]
					}
				]
			}
		},
		computed: {
			...mapState([
				'isAsideVisible'
			])
		},
		methods: {
        	menuClick(item) {
				this.$emit('menu-click', item)
			},

		}
    }
</script>

<style scoped>
	aside.aside {
		display: block;
		max-width: 250px;
	}
	aside.aside .image {
		margin: 0 auto;
		padding: 2px 5px;
		height: 50px;
		background: #ffffff;
	}

	aside.aside .image img {
		height: 45px;
		max-width: 150px;
	}
</style>
