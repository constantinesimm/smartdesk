<template>
	<div class="app-admin">
		<header class="app-header" v-if="$store.getters.isLoggedIn">
			<Navbar/>
		</header>
		<section class="app-container">
			<Aside v-if="$store.getters.isLoggedIn"/>
			<main role="main" class="app-main-content">
				<router-view />
			</main>
		</section>
	</div>
</template>

<script>
	import Navbar from "../components/Navbar";
	import Aside from "../components/Aside";

    export default {
        name: "AdminPage",
		components: {
        	Navbar, Aside
		},
		data() {
        	return {}
		}
    }
</script>

<style scoped>
	.app-header {
		position: relative;
		height: 52px;
	}

	.app-container {
		display: flex;
		flex-direction: row;
	}
	.app-main-content {
		width: 100%;
		padding: 25px;
	}
</style>
