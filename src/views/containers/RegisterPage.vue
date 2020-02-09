<template>
	<section class="app-register-page">
		<register-form />
	</section>
</template>

<script>
	import RegisterForm from "../../components/card/RegisterForm";

    export default {
        name: "RegisterPage",
		components: {
        	RegisterForm
		}
    }
</script>

<style scoped>
	.app-register-page {
		display: flex;
		justify-content: center;
		align-items: center;
		height: calc(100vh - 200px);
	}
</style>
