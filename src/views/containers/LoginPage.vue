<template>
	<section class="app-login-page">
		<login-form/>
	</section>
</template>

<script>
	import LoginForm from "../../components/card/LoginForm";

	export default {
        name: "LoginPage",
		components: { LoginForm }
	}
</script>

<style scoped>
	.app-login-page {
		display: flex;
		justify-content: center;
		align-items: center;
		height: calc(100vh - 200px);
	}
</style>
