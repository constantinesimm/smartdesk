<template>
  <div id="burger" :class="sidebarVisible ? 'burger-active' : 'burger-collapse'" @click="handleClick">
    <button type="button" class="burger-button">
      <span class="burger-bar burger-bar--1"/>
      <span class="burger-bar burger-bar--2"/>
      <span class="burger-bar burger-bar--3"/>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'sidebar-toggle',
    data() {
      return {
        sidebarVisible: true
      }
    },
    created() {
      if (window.screen.width < 768) this.sidebarVisible = false;
    },
    methods: {
      handleClick() {
        this.sidebarVisible = !this.sidebarVisible;
        this.$eventHub.$emit('toggle-sidebar');
      }
    },
  };
</script>

<style lang="css" scoped>
  /* Collapse button */
  .burger-button:focus {
    outline: 0;
  }
  .burger-button {
    position: fixed;
    top: 20px;
    left: 15px;
    height: 24px;
    width: 26px;
    display: block;
    z-index: 3000;
    cursor: pointer;
    border: 1px dotted #ffffff;
    color: #ffffff;
    border-radius: 5px;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .burger-bar {
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  .burger-bar--2 {
    transform: scaleX(1);
  }
  .burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
  }
  .no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
  }
  .burger-bar--3 {
    transform: translateY(6px);
  }
  #burger.burger-active .burger-button {
    transform: rotate(-180deg);
  }
  #burger.burger-active .burger-bar {
    background-color: #ffffff;
  }
  #burger.burger-active .burger-bar--1 {
    transform: rotate(45deg);
  }
  #burger.burger-active .burger-bar--2 {
    opacity: 0;
  }
  #burger.burger-active .burger-bar--3 {
    transform: rotate(-45deg);
  }
</style>
