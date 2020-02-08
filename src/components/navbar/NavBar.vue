<template>
	<nav id="navbar-main" class="navbar is-fixed-top">
		<div class="navbar-brand">
			<a @click="menuToggleMobile" class="navbar-item is-hidden-desktop">
				<b-icon :icon="menuToggleMobileIcon"/>
			</a>
		</div>
		<div class="navbar-brand is-right">
			<div class="navbar-item navbar-item-menu-toggle">
				<a @click="menuNavBarToggle" class="is-hidden-desktop">
					<b-icon :icon="menuNavBarToggleIcon" custom-size="default"/>
				</a>
			</div>
		</div>
		<div class="navbar-menu fadeIn animated faster" :class="{'is-active':isMenuNavBarActive}">
			<div class="navbar-end">
				<a class="navbar-item" title="Log out" @click="logout">
					<b-icon icon="sign-out-alt" custom-size="default"/>
					<span>Log out</span>
				</a>
			</div>
		</div>
	</nav>
</template>

<script>
	import { mapState } from 'vuex';

    export default {
        name: 'NavBar',
		data() {
        	return {
				isMenuNavBarActive: false
			}
		},
		computed: {
        	menuNavBarToggleIcon() {
        		return this.isMenuNavBarActive ? 'times' : 'bars'
			},
			menuToggleMobileIcon() {
        		return this.isAsideMobileExpanded ? 'chevron-circle-left' : 'chevron-circle-right'
			},
			...mapState([
				'isNavBarVisible',
				'isAsideMobileExpanded'
			])
		},
		methods: {
			menuToggleMobile () {
				this.$store.commit('asideMobileStateToggle')
			},
			menuNavBarToggle () {
				this.isMenuNavBarActive = (!this.isMenuNavBarActive)
			},
			logout() {
        		console.log('clicked log out')
			}
		}
    }
</script>

<style>
</style>
