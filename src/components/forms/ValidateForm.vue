<template>
  <section class="app-validate-page">
    <div class="card">
      <header class="card-header">
        <div class="card-header-title has-text-white">
          <b-icon icon="lock" size="is-medium"/>
          <span class="is-size-4 card-header-title-text">Validate</span>
        </div>
      </header>
      <section class="card-content">
        <BInputWithValidation rules="required|email" data-label="Email" data-type="email" v-model="email"/>
        <BInputWithValidation rules="required|alpha|min:4|max:20" data-label="Firstname" data-type="text" v-model="firstname"/>

        <b-field grouped>
          <BSelectWithValidation rules="required" data-label="Language" v-model="language">
            <option value="en"> English (default)</option>
            <option value="uk"> Українська </option>
            <option value="ru"> Русский </option>
          </BSelectWithValidation>

          <BRadioWithValidation rules="required" v-model="gender" data-label="Gender" class="has-radio-centered">
            <b-tooltip label="Male" position="is-right" type="is-info">
              <b-radio v-model="gender" native-value="male" type="is-info">
                <b-icon icon="mars" size="is-middle" :type="gender === 'male' ? 'is-info' : ''"/>
              </b-radio>
            </b-tooltip>
            <b-tooltip label="Female" position="is-left" type="is-danger">
              <b-radio v-model="gender" native-value="female" type="is-danger">
                <b-icon icon="venus" size="is-middle" :type="gender === 'female' ? 'is-danger' : ''"/>
              </b-radio>
            </b-tooltip>
          </BRadioWithValidation>

          <BCalendarWithValidation rules="required|birthday" v-model="dateOfBirthday" data-label="Date of birthday" data-name="Date of birthday" data-type="date"/>
        </b-field>

        <b-field grouped>
          <BInputWithValidation rules="required|password" data-label="Password" data-type="password" v-model="secret"/>
          <BInputWithValidation rules="required|password|confirmed" data-label="Confirm password" data-type="password" v-model="secretConfirm"/>
        </b-field>
      </section>
      <footer class="card-footer">
        <div class="card-footer-content"></div>
      </footer>
    </div>
  </section>
</template>

<script>
  import { ValidationObserver } from "vee-validate";
  import BInputWithValidation from "../inputs/BInputWithValidation";
  import BSelectWithValidation from "../inputs/BSelectWithValidation";
  import BRadioWithValidation from "../inputs/BRadioWithValidation";
  import BCalendarWithValidation from "../inputs/BCalendarWithValidation";

  export default {
    name: "ValidateForm",
    components: {
      ValidationObserver,
      BInputWithValidation,
      BSelectWithValidation,
      BRadioWithValidation,
      BCalendarWithValidation
    },
    data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        secret: '',
        secretConfirm: '',
        language: '',
        gender: '',
        dateOfBirthday: null
      }
    },
    methods: {
      submit() {
        console.log("Form submitted yay!");
      },
      resetForm() {
        this.email = "";
        this.password = "";
        this.confirmation = "";
        this.subject = "";
        this.choices = [];
        requestAnimationFrame(() => {
          this.$refs.observer.reset();
        });
      }
    }
  }
</script>

<style scoped>
  .app-validate-page {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: calc(100vh - 200px);
  }
  .card {
    width: 450px;
    border-radius: 15px;
    box-shadow: 0 -5px 25px 0 rgba(0, 0, 0, 0.05), 0 5px 25px 0 rgba(0, 0, 0, 0.05);
  }

  .card-header {
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }

  .card-header-title {
    display: flex;
    justify-content: center;
  }

  .card-header-title-text {
    padding-left: 5px;
  }

  .field-group {
    margin-bottom: 1.5rem;
  }

  .login-button-field {
    margin-top: 1.5rem;
  }

  .login-button-field > .control {
    width: 100%;
    text-align: center;
  }

  .login-button {
    cursor: pointer;
  }

  .login-button[disabled] {
    cursor: no-drop;
  }

  .button.is-text {
    text-decoration: none;
  }

  .button.is-text:hover {
    background: #0000000d;
    opacity: .8;
  }

  .card-footer {
    padding: 0.5rem 1rem;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  @media screen and (max-width: 499px) {
    .card-footer {
      justify-content: center;
    }

    .auth-buttons-fields > .control {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media screen and (min-width: 500px) {
    .auth-buttons-fields {
      width: 100%;
    }

    .auth-buttons-fields > .control {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }

  .has-radio-centered {
    margin-bottom: 0!important;
    height: 40px;
    display: flex;
  }
  .has-radio-centered > span {
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
