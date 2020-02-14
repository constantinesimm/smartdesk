<template>
  <!-- Access Forbidden Card -->
  <div class="card form-access-forbidden" v-if="!accessForbidden['status']">
    <header class="card-header">
      <div class="card-header-title has-text-white">
        <b-icon icon="exclamation-triangle" size="is-medium"/>
        <span class="is-size-4 card-header-title-text">Access Forbidden!</span>
      </div>
    </header>
    <section class="card-content">
      <b-message type="is-danger">
        <div class="message-body-text">
          {{ accessForbidden['message'] ? accessForbidden['message'] : `Unexpected Error. Check your invite link and try again later!` }}
        </div>
      </b-message>
    </section>
    <footer class="card-footer">
      <b-field>
        <b-button tag="router-link" to="/" label="Main page"
                  icon-left="backspace" type="is-danger"
                  class="register-button"/>
      </b-field>
    </footer>
  </div>

  <!-- Access Allowed Card -->
  <div class="card" v-else>
    <header class="card-header">
      <div class="card-header-title has-text-white">
        <b-icon icon="user-check" size="is-medium"/>
        <span class="is-size-4 card-header-title-text">Register Complete</span>
      </div>
    </header>
    <ValidationObserver tag="section" class="card-content">
      <!-- Email and UserId -->
      <b-field label="Email" class="email-field" type="is-success">
        <b-input v-model="email" type="text" disabled readonly/>
      </b-field>

      <!-- Firstname & Lastname -->
      <BInputWithValidation v-model="firstname" rules="required|alpha|min:4|max:20" data-label="Firstname" data-type="text" data-placeholder="Type your firstname"/>
      <BInputWithValidation v-model="lastname" rules="required|alpha|min:4|max:20" data-label="Lastname" data-type="text" data-placeholder="Type your lastname"/>

      <!-- Gender / Language / Date of Birthday -->
      <b-field grouped class="user-info-fields">
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

        <BCalendarWithValidation rules="required|birthday" v-model="birthday" data-label="Date of birthday" data-name="Date of birthday" data-type="text"/>
      </b-field>

      <!-- Password and Password confirm -->
      <b-field grouped>
        <BInputWithValidation rules="required|password" vid="password" data-label="Password" data-type="password" v-model="secret"/>
        <BInputWithValidation rules="required|password|confirmed:password" data-label="Confirm password" data-type="password" v-model="secretConfirm"/>
      </b-field>
    </ValidationObserver>
    <!--

    -->
    <footer class="card-footer">

      <!-- Cancel & Register buttons -->
      <b-field grouped class="register-buttons-fields">
        <b-button label="check" v-model="checkFormValid" @click="checkFormValid = !checkFormValid" icon-left="check" type="is-success" class="register-button" outlined/>

        <b-button tag="router-link" to="/" label="Main page" icon-left="home" type="is-danger" class="register-button" rounded outlined/>

        <b-button :disabled="!allowSubmitButton" :loading="isLoadingButton" outlined icon-pack="far" icon-left="save" type="is-primary" class="register-button" label="Register"/>
      </b-field>

    </footer>
  </div>
</template>

<script>
  import { ValidationObserver, ValidationProvider } from 'vee-validate';
  import BInputWithValidation from "../inputs/BInputWithValidation";
  import BRadioWithValidation from "../inputs/BRadioWithValidation";
  import BCalendarWithValidation from "../inputs/BCalendarWithValidation";
  import BSelectWithValidation from "../inputs/BSelectWithValidation";

  export default {
    name: "RegisterForm",
    components: {
      ValidationObserver,
      ValidationProvider,
      BInputWithValidation,
      BSelectWithValidation,
      BRadioWithValidation,
      BCalendarWithValidation
    },
    data() {
      return {
        email: 'test',
        firstname: '',
        lastname: '',
        gender: '',
        language: '',
        birthday: '',
        secret: '',
        secretConfirm: '',
        isLoadingButton: false,
        checkFormValid: false,
        serviceToken: this.$route.params.token,
        accessForbidden: {
          status: true,
          message: null
        }
      }
    },
    computed: {
      allowSubmitButton: function() {
        const data = this.$data;
        const dataKeysNotEmpty = ['email', 'userId', 'firstname', 'lastname', 'gender', 'language', 'birthday', 'secret', 'secretConfirm'].map(key => !!data[key]).every(key => !!Boolean(key));
        const secretFieldsMatch = ((password, confirm) => {
          let validate = value => /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\w])[\w]{6,14}$/.test(value);

          return (validate(password) && validate(confirm) && password === confirm);
        })(data['secret'], data['secretConfirm']);

        return (dataKeysNotEmpty && secretFieldsMatch);
      }
    },
    watch: {
      'allowSubmitButton': function(status) {
        console.log(status)
      }
    },
    methods: {
      formAccessAllow() {
        this.accessForbidden['status'] = false;
        this.accessForbidden['message'] = null;
      },
      formAccessForbidden(msg) {
        this.accessForbidden['status'] = true;
        this.accessForbidden['message'] = msg;
      }
    }
  }
</script>

<style scoped>
  /* Form Access Forbidden */
  .form-access-forbidden .card-header {
    background-color: #f14668;
  }

  .form-access-forbidden .card-content {
    padding: 1.5rem;
  }

  .form-access-forbidden .card-footer {
    justify-content: center;
  }

  .message-body-text {
    display: flex;
    justify-content: center;
  }

  /* Form Access Allowed */
  .card {
    width: 600px;
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

  .card-content {
    padding: 1.5rem 1.5rem 0 1.5rem;
  }

  .field-group {
    margin-bottom: 1.5rem;
  }

  .field.is-grouped {
    justify-content: space-between;
  }

  .field.user-info-fields.is-grouped > div {
    width: 30%;
  }

  .field.is-grouped > div {
    width: 48%;
  }

  .field.is-grouped > .email-field {
    width: 75%;
  }

  .field.is-grouped > .userId-field {
    width: 20%;
  }

  .register-button-field {
    margin-top: 1.5rem;
  }

  .register-button-field > .control {
    width: 100%;
    text-align: center;
  }

  .register-button {
    cursor: pointer;
  }

  .register-button[disabled] {
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
    justify-content: flex-end;
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
    justify-content: center;
    border-radius: 4px;
  }
  .has-radio-centered > span {
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
