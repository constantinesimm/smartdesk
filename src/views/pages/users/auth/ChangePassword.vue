<template>
  <div class="main-content-container container-fluid h-100 px-4">
    <div class="row h-100 no-gutters">
      <div class="auth-form mx-auto col-sm-7 col-md-5 col-lg-3">
        <div class="card">
          <div class="card-body">
            <!-- Logo and Title -->
            <img src="../../../../assets/image/logotypes/logotype_w250h75.png" alt="SmartDesk - Login page" class="auth-form__logo d-table mx-auto mb-3">
            <h5 class="auth-form__title text-center mb-4">Change Password</h5>

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

            <!-- Password Confirm field -->
            <div class="form-group">
              <label>Password Confirm</label>
              <div class="input-group input-group-seamless">
                <div class="input-group-prepend">
                  <div :class="['input-group-text password-reveal', this.secretConfirm === null ? '': !this.$v.secretConfirm.$invalid ? 'text-success' : 'text-danger']">
                    <i class="material-icons md-18" @click="inputTypeIsPasswordConfirm = !inputTypeIsPasswordConfirm"> {{ !inputTypeIsPasswordConfirm ? 'visibility_off' : 'visibility' }} </i>
                  </div>
                </div>
                <input v-model="secretConfirm" @input="validateInput('secretConfirm')" :class="['form-control', this.secretConfirm === null ? '': !this.$v.secretConfirm.$invalid ? 'is-valid' : 'is-invalid']" :type="inputTypeIsPasswordConfirm ? 'password' : 'text'" name="secretConfirm" placeholder="Enter password" autocomplete="off"/>
              </div>

              <d-form-invalid-feedback :class="{ 'invalid-field': this.secretConfirm !== null && this.$v.secretConfirm.$invalid }">
                <span v-if="!this.$v.secretConfirm.sameAsSecret"> Passwords must be identical </span>
              </d-form-invalid-feedback>
            </div>
          </div>

          <div class="border-top card-footer">
            <div class="auth-form__meta">
              <d-button @click="submitForm" theme="success" :disabled="!this.formSubmitted ? this.$v.$invalid : true" class="mx-auto submit-button" pill>
                <span class="submit-button-icon">
                  <span v-show="!this.formSubmitted" class="icon-container">
                    <i class="far fa-save fa-lg"/>
                  </span>
                  <chase-spinner v-show="this.formSubmitted" class="button-filled"/>
                </span>
                <span class="submit-button-title"> {{ !this.formSubmitted ? 'Save' : 'Loading...' }}</span>
              </d-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ChaseSpinner from "../../../components/loaders/ChaseSpinner";
  import { isPassword, required, sameAs } from "../../../../plugin/validators";

  export default {
    name: "UserChangePassword",
    components: {
      ChaseSpinner
    },
    data() {
      return {
        user: this.$route.params.user_id,
        token: this.$route.params.token,
        secret: null,
        secretConfirm: null,
        inputTypeIsPassword: true,
        inputTypeIsPasswordConfirm: true,
        formSubmitted: false
      }
    },
    validations: {
      secret: { isPassword, required },
      secretConfirm: { sameAsSecret: sameAs('secret') }
    },
    methods: {
      submitForm() {
        this.formSubmitted = true;

        setTimeout(() => {
          this.formSubmitted = false;
        }, 20000)
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
