<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
    <accept-cookie/>
  </div>
</template>

<script>
  import AcceptCookie from "./components/modal/AcceptCookie";

  export default {
    components: {
      AcceptCookie
    },
		computed: {
		  layout() {
		    return `${ this.$route.meta.layout || 'default' }-layout`;
      }
    }
	}
</script>
<style lang="scss">
	body, #app {
		font-family: 'Ubuntu', sans-serif!important;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: rgba(243, 243, 244, 0.05)!important;
	}
  .material-icons.md-18 {
    font-size: 18px!important;
  }
  .material-icons.md-24 {
    font-size: 24px!important;
  }
  .material-icons.md-36 {
    font-size: 36px!important;
  }

  button:disabled {
    cursor: no-drop!important;
  }

  .password-reveal {
    cursor: pointer!important;
  }
  .invalid-field, .valid-field {
    display: block!important;
    font-size: 80%!important;
  }
  .birthday-picker {
    background-color: transparent!important;
    cursor: pointer!important;
  }

  .spinner, .sk-fading-circle {
    width: 20px;
    height: 20px;
    margin: unset!important;
  }
</style>
