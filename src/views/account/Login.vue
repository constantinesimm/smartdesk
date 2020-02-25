<template>
  <div class="main-content-container container-fluid h-100 px-4">
    <div class="row h-100 no-gutters">
      <div class="auth-form mx-auto col-sm-7 col-md-5 col-lg-3">
        <div class="card">
          <div class="card-body">

            <!-- Logo and Title -->
            <router-link tag="a" to="/" v-d-tooltip.top="'Go to Main Page'">
              <img src="../../assets/image/logotype_w250h75.png" alt="SmartDesk - Main Page" class="auth-form__logo d-table mx-auto mb-3"/>
            </router-link>
            <h5 class="auth-form__title text-center mb-4">Sign In Your Account</h5>

            <!-- Email field -->
            <div class="form-group">
              <label class="tooltip__question" v-d-tooltip.hover="'We\'ll never share your email with anyone else'">
                Email <i class="far fa-question-circle"/>
              </label>

              <div class="input-group input-group-seamless">
                <div class="input-group-prepend">
                  <div :class="['input-group-text', this.email === null ? '' : !this.$v.email.$invalid ? 'text-success' : 'text-danger']">
                    <i class="far fa-envelope fa-lg"/>
                  </div>
                </div>

                <input v-model="email" @input="validateInput('email')" :class="['form-control', this.email === null ? '': !this.$v.email.$invalid ? 'is-valid' : 'is-invalid']" type="email" placeholder="Enter email" autocomplete="off"/>
              </div>

              <d-form-invalid-feedback :class="{ 'invalid-field': this.$v.email.$dirty && this.$v.email.$invalid }">
                <span v-if="!this.$v.email.required">Email is required!</span>
                <span v-if="!this.$v.email.email">Invalid email address!</span>
              </d-form-invalid-feedback>
            </div>

            <!-- Password field -->
            <div class="form-group">
              <label>Password</label>
              <div class="input-group input-group-seamless">
                <div class="input-group-prepend">
                  <div :class="['input-group-text password-reveal', this.secret === null ? '': !this.$v.secret.$invalid ? 'text-success' : 'text-danger']">
                    <i class="material-icons md-18" @click="inputTypeIsPassword = !inputTypeIsPassword"> {{ !inputTypeIsPassword ? 'visibility_off' : 'visibility' }} </i>
                  </div>
                </div>
                <input v-model="secret" @input="validateInput('secret')" :class="['form-control', this.secret === null ? '': !this.$v.secret.$invalid ? 'is-valid' : 'is-invalid']" :type="inputTypeIsPassword ? 'password' : 'text'" name="secret" placeholder="Enter password" autocomplete="off"/>
              </div>

              <d-form-invalid-feedback :class="{ 'invalid-field': this.$v.secret.$dirty && this.$v.secret.$invalid }">
                <span v-if="!this.$v.secret.required">Password is required!</span>
                <span v-if="!this.$v.secret.isPassword">
                  Password must contains:<br>
                  - min 6 and max 14 characters;<br>
                  - at least 1 digit character;<br>
                  - only Latin letters (1 upper and 1 lower case);
                </span>
              </d-form-invalid-feedback>
            </div>

            <!-- Submit button -->
            <div class="form-group submit-btn-group">
              <d-button @click="submitForm" :disabled="!this.formSubmitted ? this.$v.$invalid : true" theme="primary" class="mx-auto submit-button" pill>
                <span class="submit-button-icon">
                  <span v-show="!this.formSubmitted" class="icon-container">
                    <i class="fas fa-sign-in-alt fa-lg"/>
                  </span>
                  <chase-spinner v-show="this.formSubmitted" class="button-filled"/>
                </span>
                <span class="submit-button-title"> {{ !this.formSubmitted ? 'Sign In' : 'Loading...' }}</span>
              </d-button>
            </div>
          </div>

          <div class="border-top card-footer">
            <div class="auth-form__meta">
              <a class="auth-form__restore-modal" @click="showPasswordRestoreModal"> Restore password <i class="fas fa-lg"/> </a>

              <d-link href="/admin/account/register" class="mr-0"> <i class="fas fa-user-plus"/> Register </d-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal window - Restore password -->
    <restore-password/>
  </div>
</template>

<script>
  import RestorePassword from "./RestorePasswordModal";
  import ChaseSpinner from "../../components/loaders/ChaseSpinner";
  import { required, email, isPassword } from "../../plugin/validators";

  export default {
    name: "Login",
    components: { RestorePassword, ChaseSpinner },
    data() {
      return {
        email: null,
        secret: null,
        inputTypeIsPassword: true,
        formSubmitted: false
      }
    },
    validations: {
      email: { required, email },
      secret: { required, isPassword }
    },
    methods: {
      submitForm() {
        this.formSubmitted = true;

        setTimeout(() => {
          this.formSubmitted = false;
        }, 20000)
      },
      showPasswordRestoreModal() {
        return this.$eventHub.$emit('show-modal-pass_restore')
      },
      validateInput(field) {
        return this.$v[field].$touch();
      }
    }
  }
</script>

<style scoped>
  .submit-button, .submit-button-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .submit-button {
    width: 175px;
    padding: 0.4rem 1rem!important;
  }

  .submit-button-icon {
    width: 18px;
    height: 18px;
  }

  .submit-button-title {
    margin-left: 5px;
    font-size: 16px;
  }
</style>
