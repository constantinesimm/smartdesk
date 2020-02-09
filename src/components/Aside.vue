<template>
	<aside :class="isSidebarMenuActive ? 'app-aside menu-active' : 'app-aside menu-collapse'">
		<div id="burger" :class="isSidebarMenuActive ? 'burger-active' : 'burger-collapse'" @click="isSidebarMenuActive = !isSidebarMenuActive">
			<button type="button" class="burger-button" title="Sidebar Menu">
				<span class="burger-bar burger-bar--1"/>
				<span class="burger-bar burger-bar--2"/>
				<span class="burger-bar burger-bar--3"/>
			</button>
		</div>
		<transition name="slide">
			<ul class="menu-list app-aside-menu">
				<li class="menu-item">
					<router-link tag="a" to="/admin/dashboard" class="menu-link" exact>
						<b-icon pack="far" icon="chart-bar" />
						<span class="menu-link-label">Dashboard</span>
					</router-link>
				</li>
				<li class="menu-item">
					<a class="submenu-link">
						<b-icon icon="users" size="is-small"/>
						<span class="menu-link-label">Users</span>
					</a>
					<ul>
						<li>
							<router-link tag="a" to="/admin/users/list" class="menu-link" exact>
								<b-icon icon="child" />
								<span class="menu-link-label">List all</span>
							</router-link>
						</li>
						<li>
							<router-link tag="a" to="/admin/users/manage" class="menu-link" exact>
								<b-icon icon="users-cog" />
								<span class="menu-link-label">Manage</span>
							</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</transition>
	</aside>
</template>

<script>
    export default {
        name: "Aside",
		data() {
			return {
				isSidebarMenuActive: true
			}
		}
    }
</script>

<style scoped>
	aside.app-aside.menu-active {
		position: relative;
		min-width: 250px;
		height: auto;
		border-top: 1px solid #4a4a4a47;
		box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.15)
	}

	.app-aside.menu-active > .app-aside-menu {
		position: fixed;
		width: 250px;
	}

	.app-aside.menu-collapse > .app-aside-menu {
		display: none;
	}

	.menu-link, .submenu-link {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0.75rem 0 0.75rem 15px;
		height: 40px;
		color: #4a4a4a;
	}
	.menu-link:hover {
		color: #ffffff;
		background: #2780e38c;
	}
	.menu-link.router-link-exact-active.router-link-active {
		background: #2780e3;
		color: #ffffff;
		width: 250px;
	}
	.menu-link.router-link-exact-active.router-link-active:hover {
		opacity: .7;
	}

	.menu-link-label {
		padding-left: 5px;
	}

	.submenu-link {
		background: transparent!important;
		color: #4a4a4a!important;
		cursor: default;
	}

	/* Collapse button */
	.app-aside .burger-button:focus {
		outline: 0;
	}
	.app-aside .burger-button {
		position: fixed;
		top: 15px;
		left: 205px;
		height: 24px;
		width: 26px;
		display: block;
		z-index: 3000;
		cursor: pointer;
		border: 1px dotted #ffffff;
		color: #ffffff;
		border-radius: 5px;
		background-color: transparent;
		pointer-events: all;
		transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.burger-bar {
		background-color: #ffffff;
		position: absolute;
		top: 50%;
		right: 6px;
		left: 6px;
		height: 2px;
		width: auto;
		margin-top: -1px;
		transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
		opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
		background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	.burger-bar--1 {
		-webkit-transform: translateY(-6px);
		transform: translateY(-6px);
	}
	.burger-bar--2 {
		transform: scaleX(1);
	}
	.burger-button:hover .burger-bar--2 {
		transform: scaleX(1);
	}
	.no-touchevents .burger-bar--2:hover {
		transform: scaleX(1);
	}
	.burger-bar--3 {
		transform: translateY(6px);
	}
	#burger.burger-active .burger-button {
		transform: rotate(-180deg);
	}
	#burger.burger-active .burger-bar {
		background-color: #ffffff;
	}
	#burger.burger-active .burger-bar--1 {
		transform: rotate(45deg);
	}
	#burger.burger-active .burger-bar--2 {
		opacity: 0;
	}
	#burger.burger-active .burger-bar--3 {
		transform: rotate(-45deg);
	}
</style>
