<template>
  <d-modal v-if="showModal" @close="handleVisibility">

    <!-- Modal Close button -->
    <div class="modal-close" @click="handleVisibility" v-d-tooltip="'Close window'">
      <i class="fas fa-times fa-lg"/>
    </div>
    <d-modal-body>

      <!-- Logo and title -->
      <d-modal-title tag="div">
        <img class="modal-logo" src="../../../../assets/image/logotypes/logotype_w250h75.png">
        <h5 class="modal-title-label">Password Recovery</h5>
      </d-modal-title>

      <!-- Email field -->
      <div class="form-group">
        <label class="tooltip__question" v-d-tooltip.hover="'We\'ll never share your email with anyone else'">
          Email <i class="far fa-question-circle"/>
        </label>

        <div class="input-group input-group-seamless">
          <div class="input-group-prepend">
            <div
              :class="['input-group-text', this.email === null ? '' : !this.$v.email.$invalid ? 'text-success' : 'text-danger']">
              <i class="far fa-envelope fa-lg"/>
            </div>
          </div>

          <input
            :class="['form-control', this.email === null ? '' : !this.$v.email.$invalid ? 'is-valid' : 'is-invalid']"
            v-model="email" @input="validateInput" autocomplete="off" type="email" placeholder="Enter email"/>
        </div>

        <d-form-invalid-feedback :class="{ 'invalid-field': this.$v.email.$invalid && this.email !== null }">
          <span v-if="!this.$v.email.required">Email is required!</span>
          <span v-if="!this.$v.email.email">Invalid email address!</span>
        </d-form-invalid-feedback>
      </div>

    </d-modal-body>

    <d-modal-footer>
      <d-button outline pill theme="danger" @click="handleVisibility" style="padding: 0.4rem 1rem">
        <i class="fas fa-times fa-lg"/> Close
      </d-button>

      <d-button @click="submitForm" :disabled="!this.formSubmitted ? this.$v.$invalid : true" theme="success" class="submit-button"pill>
        <span class="submit-button-icon">
          <span v-show="!this.formSubmitted" class="icon-container">
            <i class="far fa-window-restore"/>
          </span>
          <chase-spinner v-show="this.formSubmitted" class="button-filled"/>
        </span>
        <span class="submit-button-title"> {{ !this.formSubmitted ? 'Recovery' : 'Loading...' }}</span>
      </d-button>
    </d-modal-footer>
  </d-modal>
</template>

<script>
  import ChaseSpinner from "../../../components/loaders/ChaseSpinner";
  import { required, email } from '../../../../plugin/validators';

  export default {
    name: "RestorePassword",
    components: {
      ChaseSpinner
    },
    data() {
      return {
        email: null,
        showModal: false,
        formSubmitted: false
      }
    },
    validations: {
      email: {required, email }
    },
    created() {
      this.$eventHub.$on('show-modal-pass_restore', this.handleVisibility);
    },
    beforeDestroy() {
      this.$eventHub.$off('show-modal-pass_restore');
    },
    methods: {
      submitForm() {
        this.formSubmitted = true;

        setTimeout(() => {
          this.formSubmitted = false;
        }, 20000)
      },
      handleVisibility() {
        this.email = null;
        this.showModal = !this.showModal;
      },
      validateInput() {
        this.$v.email.$touch();
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

          .modal-logo {
            height: 40px;
            margin-bottom: 0.5rem;
          }

          .modal-title-label {
            font-weight: bold;
          }
        }
      }

      .modal-footer {
        .submit-button, .submit-button-icon {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .submit-button {
          width: 100px;
          padding: 0.4rem 1rem!important;
        }

        .submit-button-icon {
          width: 18px;
          height: 18px;
        }

        .submit-button-title {
          margin-left: 5px;
        }
      }
    }
  }
</style>
