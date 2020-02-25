<template>
  <d-container>
    <vue-cookie-accept-decline :ref="'smartdesk'"
                               elementId="smartdesk__cookie"
                               :position="'bottom-right'"
                               :type="'floating'"
                               :transitionName="'slideFromBottom'"
                               :disableDecline="true"
                               @status="cookieStatus"
                               @clicked-accept="cookieClickedAccept">
      <div slot="message">
        <p style="margin-bottom: 5px; font-weight: 300;">
          This website uses cookie files to improve your navigation and ensure you get the best experience on our website.<br>
          <span style="font-weight: 500;">By continuing to use this site, you accept our use of cookies</span>.
        </p>

        <a class="text-info cookie__policy" @click="showCookiePolicy">Learn about Cookie Policy</a>
      </div>

      <!-- Optional -->
      <div slot="acceptContent"> GOT IT! </div>
    </vue-cookie-accept-decline>
    <cookie-policy/>
  </d-container>
</template>

<script>
  import VueCookieAcceptDecline from 'vue-cookie-accept-decline';
  import CookiePolicy from "./agreements/CookiePolicy";

  export default {
    name: "AcceptCookie",
    components: {
      VueCookieAcceptDecline,
      CookiePolicy
    },
    methods: {
      cookieStatus(status) {
        this.status = status
      },
      cookieClickedAccept() {
        this.status = 'accept'
      },
      showCookiePolicy() {
        this.$eventHub.$emit('show-modal-cookies_policy');
      }
    }
  }
</script>

<style lang="scss">
  .cookie__floating {
    margin-bottom: 0!important;
    max-width: 500px!important;
    font-family: "Ubuntu", sans-serif !important;

    .cookie__floating__content {
      max-height: 125px;
    }
  }
  .cookie__policy {
    cursor: pointer;
  }
</style>
