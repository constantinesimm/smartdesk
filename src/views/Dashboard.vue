<template>
	<section class="app-admin-dashboard">
		<TitleBar> Dashboard </TitleBar>
		<section class="app-main-section">

		</section>
	</section>
</template>

<script>
	import TitleBar from "../components/TitleBar";

    export default {
        name: "Dashboard",
		components: {
			TitleBar
		},
		data() {
        	return {
        		userName: 'User'
			}
		}
    }
</script>

<style scoped>
	.app-parent-container-label {
		font-size: 1.75rem;
		font-weight: 300;
	}

	.app-main-section {
		height: 100vh; /* calc(100vh - 172px) */
	}
</style>
