<template>
  <div id="app">
	  <router-view />
  </div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>
<style lang="scss">
	#app {
		height: 100vh;
		width: 100vw;
		font-family: 'Ubuntu', sans-serif!important;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: rgba(243, 243, 244, 0.05)!important;
	}
</style>
