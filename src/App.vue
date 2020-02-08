<template>
  <div id="app">
	  <nav-bar />
	  <aside-menu />
	  <main role="main">
		  <router-view />
	  </main>
  </div>
</template>

<script>
	import NavBar from "./components/navbar/NavBar";
	import AsideMenu from "./components/aside/AsideMenu";

	export default {
		components: {
			AsideMenu,
			NavBar
		}
	}
</script>
<style lang="scss">
	#server {
	  font-family: Avenir, Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	}

	#nav {
	  padding: 30px;

	  a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
		  color: #42b983;
		}
	  }
	}

	aside.aside.is-expanded + main {

	}
</style>
