<template>
  <d-container fluid>
    <d-row>
      <!-- Admin Sidebar and Toggle Button-->
      <sidebar-toggle/>
      <admin-sidebar :items="sidebarItems"/>

      <d-col :class="sidebarStatusClass" tag="main">

        <!-- Admin Navbar -->
        <admin-navbar/>

        <!-- Content -->
        <slot/>

        <!-- Admin Footer -->
      </d-col>

    </d-row>
  </d-container>
</template>

<script>
  import getSidebarItems from '../data/sidebar-nav-items';
  import AdminNavbar from '../components/Navbar';
  import AdminSidebar from '../components/Sidebar';
  import SidebarToggle from "../components/SidebarToggle";

  export default {
    name: 'admin-layout',
    components: {
      SidebarToggle,
      AdminNavbar,
      AdminSidebar
    },
    data() {
      return {
        sidebarVisible: true,
        sidebarStatusClass: window.innerWidth > 768 ? 'admin-content offset-lg-2 offset-md-3 p-0 col-sm-12 col-md-9 col-lg-10 sidebar-visible' : 'admin-content p-0 col-sm-12 col-md-12 col-lg-12 sidebar-collapsed',
        sidebarItems: getSidebarItems()
      }
    },
    created() {
      this.$eventHub.$on('toggle-sidebar', this.handleSidebarToggle)
    },
    beforeDestroy() {
      this.$eventHub.off('toggle-sidebar');
    },
    methods: {
      handleSidebarToggle() {
        this.sidebarVisible = !this.sidebarVisible;
        this.sidebarStatusClass = this.sidebarVisible ? 'admin-content offset-lg-2 offset-md-3 p-0 col-sm-12 col-md-9 col-lg-10 sidebar-visible' : 'admin-content p-0 col-sm-12 col-md-12 col-lg-12 sidebar-collapsed'
      }
    }
  }
</script>

<style lang="scss">
  .user-avatar-container {
    padding-top: 0;
    padding-bottom: 0;
  }
  .user-avatar-container > .user-avatar {
    max-height: 40px;
  }
  .fas.fa-door-open {
    transform: rotateY(180deg);
  }

  .sidebar-visible .admin-navbar nav.navbar > div.navbar-brand {
    display: none!important;
  }
</style>
