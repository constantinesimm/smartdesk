<template>
    <b-navbar class="app-navbar is-primary">
		<template slot="brand">
			<b-navbar-item class="brand-item" tag="router-link" to="/">
				<img class="brand-logo" src="../assets/image/logotype_w250h75_inverted_white.png" alt="SmartDesk Web Application"/>
			</b-navbar-item>
		</template>
		<template slot="start"/>
		<template slot="end">
			<b-navbar-item tag="router-link" to="/admin/users/profile">
				<b-icon pack="far" icon="user-circle" size="is-small"/>
				<span>Profile</span>
			</b-navbar-item>
			<b-navbar-item tag="a">
				<b-icon icon="sign-out-alt" size="is-small"/>
				<span>Log out</span>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
	nav.app-navbar {
		position: fixed;
		height: 52px;
		width: 100vw;
	}
	.brand-item {
		max-width: 250px;
		width: 250px;
		display: flex;
		justify-content: flex-start;
		padding-left: 25px;
	}
	.navbar-item img {
		max-height: 50px;
		height: 45px;
	}
</style>
