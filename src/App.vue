<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
    <accept-cookie/>
  </div>
</template>

<script>
  import AcceptCookie from "./views/components/modal/AcceptCookie";
  import ls from './plugin/ls-secure';

  export default {
    components: {
      AcceptCookie
    },
    created() {
      console.log(ls.getItem('sd-auth__secured') ? ls.getItem('sd-auth__secured') : 'ls is empty')
      if (ls.getItem('sd-auth__secured')) {
        this.$store.replaceState(ls.getItem('sd-auth__secured'))
      }

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
		background-color: #e1e5ebc4!important;
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
