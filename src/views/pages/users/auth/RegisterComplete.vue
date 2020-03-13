<template>
  <div class="main-content-container container-fluid h-100 px-4">
    <div class="row h-100 no-gutters">
      <div class="auth-form mx-auto col-sm-9 col-md-7 col-lg-5">
        <div class="card">
          <div class="card-body">

            <!-- Logo and card title -->
            <router-link tag="a" to="/" v-d-tooltip.top="'Go to Main Page'">
              <img src="../../../../assets/image/logotypes/logotype_w250h75.png" alt="SmartDesk - Main Page" class="auth-form__logo d-table mx-auto mb-3"/>
            </router-link>

            <h5 class="auth-form__title text-center mb-4">Complete Account Registration</h5>

            <!-- User ID and Email (sended from back) -->
            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="userId">User ID</label>
                <div class="input-group input-group-seamless" style="min-width: unset">
                  <div class="input-group-prepend">
                    <div class="input-group-text text-success">
                      <i class="fas fa-user-tag fa-lg"/>
                    </div>
                  </div>

                  <input v-model="userId" id="userId" type="number" class="form-control is-valid" disabled readonly autocomplete="off">
                </div>
              </div>

              <div class="form-group col-md-9">
                <label> Email </label>
                <div class="input-group input-group-seamless">
                  <div class="input-group-prepend">
                    <div class="input-group-text text-success">
                      <i class="far fa-envelope fa-lg"/>
                    </div>
                  </div>

                  <input v-model="email" type="email" class="form-control is-valid" disabled readonly autocomplete="off">
                </div>
              </div>
            </div>

            <!-- First and Last Name-->
            <div class="form-row ">
              <div class="form-group col-md-6">
                <label>Firstname</label>
                <div class="input-group input-group-seamless">
                  <div class="input-group-prepend">
                    <div :class="['input-group-text', this.firstname === null ? '': !this.$v.firstname.$invalid ? 'text-success' : 'text-danger']">
                      <i class="far fa-user-circle fa-lg"/>
                    </div>
                  </div>

                  <input v-model="firstname" @input="validateInput('firstname')" :class="['form-control', this.firstname === null ? '': !this.$v.firstname.$invalid ? 'is-valid' : 'is-invalid' ]" type="text" placeholder="Enter firstname" autocomplete="off">
                </div>

                <d-form-invalid-feedback :class="{ 'invalid-field': this.$v.firstname.$dirty && this.$v.firstname.$invalid }">
                  <span v-if="!this.$v.firstname.required">Firstname is required!</span>
                  <span v-if="!this.$v.firstname.isName">Firstname is invalid format:<br>
                      - min 4 and max 20 characters;<br>
                      - allow only Latin or Cyrillic letters (EN/UA/RU);
                    </span>
                </d-form-invalid-feedback>
              </div>

              <div class="form-group col-md-6">
                <label>Lastname</label>
                <div class="input-group input-group-seamless">
                  <div class="input-group-prepend">
                    <div :class="['input-group-text', this.lastname === null ? '': !this.$v.lastname.$invalid ? 'text-success' : 'text-danger']">
                      <i class="fas fa-user-circle fa-lg"/>
                    </div>
                  </div>

                  <input v-model="lastname" @input="validateInput('lastname')" :class="['form-control', this.lastname === null ? '': !this.$v.lastname.$invalid ? 'is-valid' : 'is-invalid']" type="text" placeholder="Enter lastname" autocomplete="off">
                </div>

                <d-form-invalid-feedback :class="{ 'invalid-field': this.$v.lastname.$dirty && this.$v.lastname.$invalid }">
                  <span v-if="!this.$v.lastname.required">Firstname is required!</span>
                  <span v-if="!this.$v.lastname.isName">Firstname is invalid format:<br>
                      - min 4 and max 20 characters;<br>
                      - allow only Latin or Cyrillic letters (EN/UA/RU);
                    </span>
                </d-form-invalid-feedback>
              </div>
            </div>

            <!-- Language / Gender / Birthday date -->
            <div class="form-row">
              <div class="form-group col-md-4">
                <label> Language </label>
                <d-form-select v-model="language" :options="languageOptions" :class="[this.language === null ? '': !this.$v.language.$invalid ? 'is-valid' : 'is-invalid']"/>

                <d-form-invalid-feedback :class="{ 'invalid-field': this.$v.language.$dirty && this.$v.language.$invalid }">
                  <span v-if="!this.$v.language.required">Language is required!</span>
                </d-form-invalid-feedback>
              </div>

              <div class="form-group col-md-4">
                <label> Gender </label>

                <d-form-select v-model="gender" :options="genderOptions" :class="[this.gender === null ? '': !this.$v.gender.$invalid ? 'is-valid' : 'is-invalid']"/>

                <d-form-invalid-feedback :class="{ 'invalid-field': this.$v.gender.$dirty && this.$v.gender.$invalid }">
                  <span v-if="!this.$v.gender.required">Language is required!</span>
                </d-form-invalid-feedback>
              </div>

              <div class="form-group col-md-4">
                <label> Birthday </label>

                <d-datepicker v-model="birthday" :open-date="new Date(2000, 0, 0)" initial-view="year" format="dd/MM/yyyy" @opened="handleCalendarView" @closed="handleCalendarView" :input-class="['form-control birthday-picker', this.birthday === undefined ? '' : !this.$v.birthday.$invalid ? 'is-valid' : 'is-invalid']" :monday-first="true" :full-month-name="true" :disabled-dates="calendarDisabledDates" placeholder="Select date" />

                <d-form-invalid-feedback :class="{ 'invalid-field': this.birthday !== undefined && this.$v.birthday.$invalid }">
                  <span v-if="!this.$v.birthday.required">Date of birthday is required!<br></span>
                  <span v-if="!this.$v.birthday.isBirthday">
                    Date of birthday is invalid:<br>
                    - min - 1965 / max - 2002;
                  </span>
                </d-form-invalid-feedback>
              </div>
            </div>

            <!-- Password and Password Confirm -->
            <div class="form-row border-top secret-form-group">
              <div class="form-group col-md-6">
                <label>Password</label>
                <div class="input-group input-group-seamless">
                  <div class="input-group-prepend">
                    <div :class="['input-group-text password-reveal', this.secret === null ? '': !this.$v.secret.$invalid ? 'text-success' : 'text-danger']">
                      <i class="material-icons md-18" @click="inputTypeIsPassword = !inputTypeIsPassword">
                        {{ !inputTypeIsPassword ? 'visibility_off' : 'visibility' }}
                      </i>
                    </div>
                  </div>

                  <input v-model="secret" @input="validateInput('secret')" :class="['form-control', this.secret === null ? '': !this.$v.secret.$invalid ? 'is-valid' : 'is-invalid']" :type="inputTypeIsPassword ? 'password' : 'text'" name="secret" placeholder="Enter password" autocomplete="off">
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

              <div class="form-group col-md-6">
                <label>Confirm password</label>
                <div class="input-group input-group-seamless">
                  <div class="input-group-prepend">
                    <div :class="['input-group-text password-reveal', this.secretConfirm === null ? '': !this.$v.secretConfirm.$invalid ? 'text-success' : 'text-danger']">
                      <i class="material-icons md-18" @click="inputTypeIsPasswordConfirm = !inputTypeIsPasswordConfirm">
                        {{ !inputTypeIsPasswordConfirm ? 'visibility_off' : 'visibility' }}
                      </i>
                    </div>
                  </div>

                  <input v-model="secretConfirm" :class="['form-control', this.secretConfirm === null ? '': !this.$v.secretConfirm.$invalid ? 'is-valid' : 'is-invalid']" :type="inputTypeIsPasswordConfirm ? 'password' : 'text'" name="secret-confirm" placeholder="Confirm password" autocomplete="off">
                </div>
                <d-form-invalid-feedback :class="{ 'invalid-field': this.secretConfirm !== null && this.$v.secretConfirm.$invalid }">
                  <span v-if="!this.$v.secretConfirm.sameAsSecret"> Passwords must be identical </span>
                </d-form-invalid-feedback>
              </div>
            </div>

            <!-- Terms of Service and Privacy Policy -->
            <div class="form-group tos-checkbox mt-3 mb-0">
              <div class="custom-control custom-checkbox mx-auto">
                <div class="terms-privacy__checkbox">
                  <div>
                    <input v-model="termsOfService" type="checkbox" :class="['custom-control-input terms-privacy__input', termsOfService === null ? '' : !!termsOfService ? 'is-valid' : 'is-invalid']" id="tos_checkbox">

                    <label class="custom-control-label terms-privacy__label" for="tos_checkbox">
                      <span style="font-weight: 600; margin-right: 5px;">I have read and agree </span> to the
                    </label>
                    <a class="text-info tos__modal-link" @click="showTermsOfService">Privacy Policy and Terms of Service</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Submit form and Home page button  -->
          <div class="border-top card-footer">

            <div class="auth-form__meta">
              <d-button @click="submitForm" :disabled="!this.formSubmitted ? this.$v.$invalid : true" theme="success" class="mx-auto submit-button" pill>
                <span class="submit-button-icon">
                  <span v-show="!formSubmitted" class="icon-container">
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
    <terms-of-service/>
  </div>
</template>

<script>
  import { isName, isBirthday, isPassword, required, sameAs } from '../../../../plugin/validators';
  import TermsOfService from '../../../components/modal/agreements/TermsOfService';
  import ChaseSpinner from "../../../components/loaders/ChaseSpinner";

  export default {
    name: "UserRegisterComplete",
    components: {
      TermsOfService, ChaseSpinner
    },
    data() {
      return {
        user: this.$route.params.user_id,
        token: this.$route.params.token,
        userId: null,
        email: null,
        firstname: null,
        lastname: null,
        gender: null,
        language: null,
        birthday: undefined,
        secret: null,
        secretConfirm: null,
        termsOfService: null,
        formAccess: {
          status: true,
          message: null
        },
        languageOptions: [
          { value: null, text: 'Select language', disabled: true },
          { value: 'en', text: 'English' },
          { value: 'uk', text: 'Українська' },
          { value: 'ru', text: 'Русский'}
        ],
        genderOptions: [
          { value: null, text: 'Select gender', disabled: true },
          { value: 'male', text: 'Male' },
          { value: 'female', text: 'Female' }
        ],
        calendarOpened: false,
        calendarDisabledDates: {
          to: new Date(1965, 1, 0),
          from: new Date(2002, 12, 0),
        },
        inputTypeIsPassword: true,
        inputTypeIsPasswordConfirm: true,
        formSubmitted: false
      }
    },
    validations: {
      firstname: { isName, required },
      lastname: { isName, required },
      language: { required },
      gender: { required },
      birthday: { isBirthday, required },
      secret: { isPassword, required },
      secretConfirm: { sameAsSecret: sameAs('secret') },
      termsOfService: { required }
    },
    methods: {
      submitForm() {
        this.formSubmitted = true;

        setTimeout(() => {
          this.formSubmitted = false;
        }, 20000)
      },
      handleCalendarView() {
        this.calendarOpened = !this.calendarOpened;
      },
      showTermsOfService() {
        return this.$eventHub.$emit('show-modal-TermsOfService');
      },
      validateInput(field) {
        return this.$v[field].$touch();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media (min-width: 1200px) {
    .auth-form {
      margin-top: calc(100vh / 12);
    }
  }
  .tos-checkbox {
    display: flex;
  }
  .gender-radio-btn {
    display: flex;
  }
  .gender-radio-btn-container {
    margin-top: 0.4rem;
    justify-content: space-evenly;
  }
  .custom-control-inline {
    margin-right: 0;
  }

  .secret-form-group {
    margin-top: 1rem;
    padding-top: 15px;
  }

  .terms-privacy__checkbox {
   div {
     display: flex;
     justify-content: center;
     width: auto;
     padding: 1rem!important;
     box-shadow: none!important;

     @media (max-width: 1399px) {
       flex-direction: column;
     }
     @media (min-width: 1400px) {
       flex-direction: row;
     }
   }
  }
  .terms-privacy__input {
    position: unset;
    left: unset;
    z-index: unset;

  }
  .terms-privacy__label {
    position: relative!important;
    display: flex;
    align-items: center;
    font-size: 14px!important;

    a {
      margin-left: 5px;
    }

    &:before {
      display: flex;
      width: 1.25rem;
      height: 1.25rem;
      position: inherit;
      top: unset!important;
      left: -15px!important;
      border: 1px solid #5A6169;
    }
    &:after {
      top: 3px!important;
      left: -8px!important;
      width: 7px!important;
      height: 14px!important;
      border-right: 3px solid #fff!important;
      border-bottom: 3px solid #fff!important;
    }
  }

  .tos__modal-link {
    margin-left: 5px;
  }

  .form-group-helpers {
    display: flex;
    flex-direction: row;

    .invalid-feedback {
      justify-content: flex-start;
    }
    .has-counter {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 50px;
      font-size: 85%;
    }
  }

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
