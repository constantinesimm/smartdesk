<template>
  <d-modal v-if="showModal" @close="handleVisibility" size="lg">

    <!-- Modal Close button -->
    <div class="modal-close" @click="handleVisibility" v-d-tooltip="'Close window'">
      <i class="fas fa-times fa-lg"/>
    </div>
    <d-modal-body>

      <!-- Logo and title -->
      <d-modal-title tag="div">
        <img class="modal-logo" src="../../../assets/image/logotype_w250h75.png">
        <h5 class="modal-title-label">Privacy Policy and Terms of Service</h5>
      </d-modal-title>

      <d-container fluid>
        <d-row>
          <d-col cols="12">
            <p class="mt-1">
              Your privacy is important to us, and so is being transparent about how we collect, use, and share information about you.<br>
              <b>We will NEVER sell your personal data to anyone.</b>
            </p>
            <p style="font-weight: bold">
              SmartDesk enables the visitors of its site, {{ hostname }}, to be in control of their personal data.
              We also provide controls that allow SmartDesk users to have control over the privacy of personal data that is captured by our service.
              This Privacy Policy provides information about how SmartDesk processes and protects this data.
            </p>
            <p>
              If you visit a site that is running services provided by SmartDesk (“<b>SmartDesk Enabled Site</b>”), the ‘End Users’ section of this Privacy Policy applies to you.
              For the purpose of this Privacy Policy, personal data means any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier (cookies), etc. (the “<b>Personal Data</b>”).
            </p>
          </d-col>
        </d-row>
        <d-row>
          <d-col cols="12">
            <h6>Collection of information from children</h6>
            <p>
              We do not knowingly collect personally identifiable information relating to children.
              In the event that we learn that we have collected personally identifiable information from anyone under 18 years of age without prior parental consent, we will take steps to promptly delete such information.
              By providing your personal information to SmartDesk, through the Service, you represent that you are at least 18 years of age or older.
            </p>
          </d-col>
        </d-row>
        <d-row>
          <d-col cols="12">
            <h6>What kind of Personal Data is processed and for what purpose?</h6>
            <ul>
              <li><b>Usage Data</b></li>
              <p>
                When you visit our site we store the name of your internet service provider, the website from which you visited us from, the parts of our site you visit, the date and duration of your visit, and information from the device (device type, operating system, screen resolution, language, country you are located in, and web browser type) you used during your visit, visited pages, your GA ClientID, your IP address.
                We use your IP address and/or country preference in order to approximate your location to provide you with a better service experience.
              </p>
              <p>
                We process this usage data to facilitate your access to our services and to assure its comfortable usage (e.g. to adjust our services to the device you are using), and to recognize and stop any misuse.
                We also process usage data in an anonymized form for statistical purposes and to improve our site.
                The legal basis for this processing is your consent and our legitimate interests, as monitoring and improving our website and services.
              </p>

              <li><b>Cookies</b></li>
              <p>
                SmartDesk uses cookies to process information including standard internet log information, user ID of the visitor if he/she is a registered user, details of the visitor’s behavioral patterns upon visiting our site.
                This is done to provide you with a better experience, ensuring the security of our website and services, marketing purposes and to facilitate the use of certain functions.
                Cookies are small data files transferred onto computers or devices by sites for record-keeping purposes and to enhance functionality on our site.
              </p>
              <p>
                Cookies are stored on your individual device and you have full control over their use.
                You may deactivate or restrict the transmission of cookies by changing the settings of your web browser.<br>
                If you visit SmartDesk site with cookies deactivated, you may possibly not be able to use all of the functions of our site to the full extent.
                You will not be able to opt-out of any cookies or other technologies that are “strictly necessary” for the functioning of our website and services.
              </p>

              <li><b>Contact us</b></li>
              <p>
                On our site you have the opportunity to contact us to ask questions, for example via the contact form or via online-chat, we ask you for your contact information (e.g. name, email address, etc.), a summary of the problem you are experiencing, and any other documentation, screenshots or information that would be helpful in resolving the issue.
                We use this data in connection with answering the queries we receive.
              </p>
              <p>
                If you receive emails from us, we may use certain analytics tools, to capture data such as when you open our email or click on any links or banners our email contains. This data helps us to gauge the effectiveness of our communications and marketing campaigns.
              </p>
              <p>
                On our site it is also possible to request a phone call. In that case, we ask you for a contact phone number. Through the phone call, you may also share with us your personal information that we may use during the phone call and later for the purpose of improving the level of our services and other marketing purposes (also for these purposes the phone call may be recorded).
              </p>

              <li><b>SmartDesk Account</b></li>
              <p>
                When you sign up for and open an account with SmartDesk, we may ask you to provide us with information such as your name, email address, phone number, website, your company name, your photo. The account data may be processed for the purposes of operating our website, identification you as a user, providing our services (e.g. sending reports), ensuring the security of our website and services, maintaining back-ups of our databases and communicating with you.
              </p>
            </ul>
          </d-col>
        </d-row>
        <d-row>
          <d-col cols="12">
            <h6>Access and Disclosure to Third Parties</h6>
            <p>
              SmartDesk does not share your personal information with third parties or the public except as set forth herein.
              We may share your personal information with our third-party service providers, such as analytical services, payment processors, CRM services and others.
              These service providers may have access to personal information as needed to perform their functions.
              Third parties with whom we share your data currently include, but are not limited to, Google, Facebook.
            </p>
            <p>
              These service providers are carefully selected and meet high data protection and security standards.
              We only share information with them that is required for the services offered and we contractually bind them to keep any information we share with them as confidential and to process Personal Data only according to our instructions.
            </p>
            <p>
              We will only pass your data on to third parties without your express consent if we are obliged to do so by statutory law or an instruction by court.
            </p>
          </d-col>
        </d-row>
        <d-row>
          <d-col cols="12">
            <h6>Legal bases for processing</h6>
            <p>
              We collect and process information about you only where we have legal bases for doing so under applicable EU laws.
              The legal bases depend on how you use SmartDesk services. This means we collect and use your information only where:
            </p>
            <ul>
              <li>We need it to provide you SmartDesk service, including to operate it, provide customer support, demo and personalized features and to protect the safety and security of our service;</li>
              <li>It satisfies a legitimate interest (which is not overridden by your data protection interests), such as for research and development, to market and promote SmartDesk and to protect our legal rights and interests;</li>
              <li>You give us consent to do so for a specific purpose or we need to process your data to comply with a legal obligation.</li>
            </ul>
          </d-col>
        </d-row>
        <d-row>
          <d-col cols="12">
            <h6>Revisions to this Privacy Policy</h6>
            <p>
              You have a right to be informed of Personal Data processed by SmartDesk, a right to rectification/correction, erasure and restriction of the processing.
              You also have the right to receive from us a structured, common and machine-readable format of Personal Data you provided to us.
            </p>
          </d-col>
        </d-row>
        <d-row>
          <d-col cols="12">
            <h6>End Users</h6>
            <p>
              <b>
                If you are a SmartDesk Enabled Site visitor, this section applies to you.<br>
                This section should always be read in conjunction with the specific Privacy Policy of the SmartDesk Enabled Site which will contain further details regarding the processing of your personal data by the SmartDesk Enabled Site.
              </b>
            </p>
            <p>
              If you are a visitor of a SmartDesk Enabled Site we may process your data such as email, name, IP address, user agents, data that you share during the recorded phone call, your phone number, user journey and other.
            </p>
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
    name: "TermsOfService",
    data() {
      return {
        showModal: false,
        hostname: location.hostname
      }
    },
    created() {
      this.$eventHub.$on('show-modal-TermsOfService', this.handleVisibility);
    },
    beforeDestroy() {
      this.$eventHub.$off('show-modal-TermsOfService');
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
