<template>
  <div :class="['admin-navbar', 'bg-white', stickyTop ? 'sticky-top' : '']">
    <d-navbar toggleable="md" type="dark" theme="primary">
      <d-navbar-brand class="navbar-brand">
        <img id="main-logo" src="../assets/image/logotype_w250h75_inverted_white.png">
      </d-navbar-brand>

      <d-navbar-nav pills class="ml-auto">
        <li class="nav-item">
          <d-link href="/account/simm" class="nav-link text-nowrap px-3 user-avatar-container d-flex" v-d-tooltip="'User Profile'">
            <img class="user-avatar rounded-circle mr-2" alt="User Avatar" src="https://static.intercomassets.com/avatars/365101/square_128/11088406_443030679193397_2927195805052797483_n-1462489695.jpg?1462489695">
            <d-button class="text-white" :size="screenWidth > 769 ? 'md' : 'sm'" pill outline>
              <span class="d-flex align-items-center nav-link-title">Constantine Simm</span>
            </d-button>
          </d-link>

        </li>
        <li class="nav-item">
          <d-link href="/" class="btn btn-pill btn-outline-primary text-white" :size="screenWidth > 769 ? 'md' : 'sm'">
            <i class="fas fa-sign-out-alt fa-lg"></i> <span> Log Out</span>
          </d-link>
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
    }
  }
</script>

<style lang="scss" scoped>
  .admin-navbar {
    .dropdown-menu {
      display: block;
    }
  }
  .navbar-brand {
    max-height: 60px;
    padding: 5px 0!important;
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
</style>
