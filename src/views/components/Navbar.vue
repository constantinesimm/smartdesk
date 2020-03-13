<template>
  <div :class="['admin-navbar', 'bg-white', stickyTop ? 'sticky-top' : '']">
    <d-navbar toggleable="md" type="dark" theme="primary">
      <router-link to="/" class="navbar-brand">
        <img id="main-logo" src="../../assets/image/logotypes/logotype_w250h75_inverted_white.png" alt="SmartDesk AdminPanel">
      </router-link>

      <d-navbar-nav pills class="ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-nowrap px-3" style="cursor: pointer" v-d-toggle.user-actions>
            <img class="user-avatar rounded-circle mr-2" src="https://static.intercomassets.com/avatars/365101/square_128/11088406_443030679193397_2927195805052797483_n-1462489695.jpg?1462489695" alt="User Avatar">
            <span class="d-none d-md-inline-block text-white">Constantine Simm</span>
          </a>
          <d-collapse id="user-actions" class="dropdown-menu dropdown-menu-small dropdown-menu-right">
            <d-dropdown-item href="/users/profile/simm">
              <i class="far fa-user-circle fa-lg text-muted mr-2"/> Profile <d-badge pill theme="warning">In DEV</d-badge>
            </d-dropdown-item>
            <d-dropdown-item>
              <i class="fas fa-user-edit fa-lg text-muted mr-2"/> Edit Profile <d-badge pill theme="warning">In DEV</d-badge>
            </d-dropdown-item>
            <d-dropdown-divider class="dropdown-separator"/>
            <d-dropdown-item class="text-danger">
              <d-button  @click="logOut" theme="danger" outline size="sm" pill><i class="fas fa-sign-out-alt fa-lg mr-2"/> Logout</d-button>
            </d-dropdown-item>
          </d-collapse>
        </li>
      </d-navbar-nav>
    </d-navbar>
  </div>
</template>

<script>
  export default {
    name: 'admin-navbar',
    props: {
      stickyTop: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        screenWidth: window.innerWidth
      }
    },
    mounted() {
      window.onresize = () => this.screenWidth = window.innerWidth
    },
    methods: {
      logOut() {
        this.$store.dispatch('secure/logout')
          .then(response => this.$toast.success(response.message))
          .catch(error => this.$toast.error(error.message))
          .finally(() => this.$router.push('/users/login'))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .admin-navbar {
    .dropdown-menu {
      display: block;
    }
  }

  main.sidebar-visible .admin-navbar .navbar {
    .navbar-brand {
      display: none!important;
    }
  }
  .navbar-brand {
    max-height: 60px;
    padding: 5px 0 !important;
    margin: 0;

    #main-logo {
      max-height: 50px;
      margin-left: 40px;
    }

    @media (max-width: 769px) {
      & #main-logo {
        margin-left: 30px;
        max-height: 40px;
      }
    }

    @media (min-width: 769px) and (max-width: 990px) {
      & #main-logo {
        margin-left: 30px;
        height: 40px;
      }
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      & #main-logo {
        height: 45px;
        max-width: 80%;
        margin-left: 30px;
      }
    }
    @media (min-width: 1199px) {
      & #main-logo {
        margin-left: 30px;
        height: 55px;
      }
    }
  }

  .nav-item {
    display: flex;
    align-items: center;

    & .user-avatar-container {
      align-items: center;
    }

    & .user-avatar-container > .user-avatar {
      max-height: 30px;
      width: auto;
    }

    & .user-avatar-container > button {
      padding: 0.5625rem 0;
    }
  }

  .nav-link-title {
    font-size: 0.9rem;
  }

  .dropdown-separator {
    background: #868e9670;
    height: 1px;
  }
</style>
