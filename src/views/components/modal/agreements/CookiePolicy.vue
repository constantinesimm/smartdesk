<template>
  <d-modal v-if="showModal" @close="handleVisibility" size="lg">

    <!-- Modal Close button -->
    <div class="modal-close" @click="handleVisibility" v-d-tooltip="'Close window'">
      <i class="fas fa-times fa-lg"/>
    </div>
    <d-modal-body>

      <!-- Logo and title -->
      <d-modal-title tag="div">
        <img class="modal-logo" src="../../../../assets/image/logotypes/logotype_w250h75.png">
        <h5 class="modal-title-label">Cookie Policy</h5>
      </d-modal-title>

      <d-container fluid>
        <d-row>
          <d-col cols="12">
            <h6>What is a cookie?</h6>
            <p>
              A cookie is a text file, a code, or a software element that saves information relating the browsing history and pattern of your terminal on the Internet.<br>
              It is under the control of your internet browser, and sometimes carries a unique and random number.<br>
              You can read it, destroy it, or modify it.
            </p>
          </d-col>
        </d-row>
        <d-row>
          <d-col cols="12">
            <h6>Why does SmartDesk uses cookies?</h6>
            <p>
              Smartdesk is always seeking new ways to better it’s or its Internet website(s) and to offer you, the internet user, a better service and experience.<br>
              Thus, Smartdesk uses different types of cookies as indicated hereafter that can warrant the preliminary consent of the internet user (commercial type cookies) before the cookie is installed on its terminal.
            </p>
          </d-col>
        </d-row>
        <d-row>
          <d-col cols="12">
            <h6>How does SmartDesk inform you of the cookies that it uses?</h6>
            <p>
              When you access for the first time the www.{{ hostname }} web site, the legal notice of the site will refer you to a page that will give you all information on the cookies that are installed and used by this site.<br>
              In any case, you have the control of these cookies. Therefore, you have the possibility to refuse or destroy them.
            </p>
          </d-col>
        </d-row>
        <d-row>
          <d-col cols="12">
            <h6>What types of Cookies are used by SmartDesk?</h6>
            <p>
              Cookies can be temporary, and only last for the duration of your browsing session on the website, or can be permanent, i.e. a longer lifespan according to the span that is attributed and the parameters of your internet browser. Numerous types of different cookies exist, of which we can set in four groups defined hereafter.
            </p>
            <ul>
              <li><b>Strictly Necessary Cookies</b></li>
              <p>
                Strictly necessary cookies are cookies that are indispensable due to the fact that the functionality of the website is contingent on their existence. Their deactivation will cause important difficulties for using the site, or even the impossibility to use the services that it proposes. The strictly necessary cookies do not conserve information once you leave the site. They permit, for example, to identify the terminals to dispatch the communication, to assign numbers to the data “packets” in order to dispatch them in the requested order, and to detect transmission errors or data loss.
              </p>
              <li><b>Functional cookies</b></li>
              <p>
                Functional cookies are used exclusively for providing an electronic communication service at the request of the internet user. If these cookies are uninstalled, providing this service will be rendered impossible.
              </p>
              <p>
                The information is conserved beyond your browsing session on the internet website, and can be transmitted to partners, uniquely for means of supplying provisions necessary to the services. These can be, for example, cookies that save the preferences of the user such as language preference of the user, cookies that save a “user session”, or cookies that provide a “virtual shopping basket”.
              </p>
              <li><b>Analytics and audience measurement cookies</b></li>
              <p>
                The audience measurement cookies help to recognize visitors of the website across their different visits. These cookies only stock an internet user’s ID (specific to each cookie) and is in no case used to collect nominative information belonging to the visitors. These cookies save the pages visited by the user, the duration of each visit, and the error messages encountered; all of which can help to enables a performance increase of the Michelin internet websites.
              </p>
              <p>
                The analytics cookies can be installed and managed by partners; however, Michelin limits their use to the ends of the analytical statistics demanded.
              </p>
            </ul>
          </d-col>
        </d-row>
      </d-container>

    </d-modal-body>

    <d-modal-footer>
      <d-container>
        <d-row>
          <d-col cols="6">
            <d-button @click="handleVisibility" theme="danger" block-level outline pill>
              <i class="fas fa-times fa-lg"/> Close window
            </d-button>
          </d-col>
        </d-row>
      </d-container>
    </d-modal-footer>
  </d-modal>
</template>

<script>
  export default {
    name: "CookiePolicy",
    data() {
      return {
        showModal: false,
        hostname: location.hostname
      }
    },
    created() {
      this.$eventHub.$on('show-modal-cookies_policy', this.handleVisibility);
    },
    beforeDestroy() {
      this.$eventHub.$off('show-modal-cookies_policy');
    },
    methods: {
      handleVisibility() {
        this.showModal = !this.showModal;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    .modal-content {
      .modal-close {
        position: absolute;
        right: 15px;
        top: 10px;
        z-index: 2000;

        & :hover {
          cursor: pointer;
          color: #ad1535;
        }
      }

      .modal-body {
        .modal-title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #5a6169a6;

          .modal-logo {
            height: 40px;
            margin-bottom: 0.5rem;
          }

          .modal-title-label {
            font-weight: bold;
          }
        }

        .col-12 {
          font-weight: 400;

          & > h6 {
            margin-top: 10px;
            font-weight: 500;
          }
        }
      }

      .modal-footer {
        & > .container .row {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
</style>
