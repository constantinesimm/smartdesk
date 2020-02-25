<template>
  <aside :class="['admin-sidebar', 'col-12', 'col-md-3', 'col-lg-2', 'px-0', sidebarVisible ? 'open' : 'collapsed']">
    <div class="admin-navbar">
      <a class="navbar-brand w-100">
        <img id="main-logo" src="../assets/image/logotype_w250h75_inverted_white.png" alt="SmartDesk AdminPanel">
      </a>
    </div>
    <div class="nav-wrapper">
      <d-nav class="flex-column">
        <li v-for="(item, navItemIdx) in items" :key="navItemIdx" class="nav-item dropdown">
          <d-collapse v-if="item.items && item.items.length" :id="`snc-${navItemIdx}`" class="dropdown-menu dropdown-menu-small" accordion="sidebar-items-accordion">
            <d-dropdown-item v-for="(subItem, subItemIdx) in item.items" :key="subItemIdx" :href="subItem.href" :to="subItem.to">
              <div class="item-icon-wrapper" v-if="subItem.htmlBefore" v-html="subItem.htmlBefore" />
              <span v-if="subItem.title">{{ subItem.title }}</span>
            </d-dropdown-item>
          </d-collapse>
          <d-link :class="['nav-link', item.items && item.items.length ? 'dropdown-toggle' : '']" :to="item.to" v-d-toggle="`snc-${navItemIdx}`">
            <div class="item-icon-wrapper" v-if="item.htmlBefore" v-html="item.htmlBefore" />
            <span v-if="item.title">{{ item.title }}</span>
            <div class="item-icon-wrapper" v-if="item.htmlAfter" v-html="item.htmlAfter" />
          </d-link>
        </li>
      </d-nav>
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'admin-sidebar',
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        sidebarVisible: true
      }
    },
    created() {
      if (window.screen.width < 768) this.sidebarVisible = false;
      this.$eventHub.$on('toggle-sidebar', this.handleToggleSidebar);
    },
    beforeDestroy() {
      this.$eventHub.$off('toggle-sidebar');
    },
    methods: {
      handleToggleSidebar() {
        this.sidebarVisible = !this.sidebarVisible;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .admin-sidebar.open {
    display: block;
  }
  .admin-sidebar.collapsed {
    display: none;
  }
  .admin-sidebar {
    .item-icon-wrapper {
      display: inline-block;
      margin-right: 5px;
    }
    .dropdown-menu {
      display: flex;
      flex-direction: column;
    }
  }
  li.dropdown {
    display: flex;
    flex-direction: column-reverse;
    cursor: pointer;

    & .dropdown-menu.show ~ a.nav-link.dropdown-toggle {
      box-shadow: inset 0.1875rem 0 0 #007bff;

      &::after {
        color: #007bff;
        border-top: 0;
        border-left: 0.4em solid transparent;
        border-bottom: 0.6em solid;
        border-right: 0.4em solid transparent;
      }
    }
  }
  .navbar-brand {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 5px 0;
    border-right: 1px solid rgba(255, 255, 255, 0.44);
    background: #007bff;

    @media (max-width: 769px) {
      & #main-logo {
        max-height: 50px;
      }
    }

    @media (min-width: 769px) and (max-width: 991px) {
      & #main-logo {
        height: 35px;
        padding-left: 15px;
      }
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      & #main-logo {
        height: 40px;
        max-width: 70%;
        padding-left: 20px;
      }
    }
    @media (min-width: 1200px) {
      & #main-logo {
        height: 45px;
        max-width: 75%;
        padding-left: 20px;
      }
    }
  }
</style>
