<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title has-text-white">
        <b-icon icon="lock" size="is-medium"/>
        <span class="is-size-4 card-header-title-text">Authentication</span>
      </div>
    </header>
    <div class="card-content">
      <b-field label="Email" label-position="on-border" class="field-group"
               :type="{ 'is-danger': emailField['isInvalid'], 'is-success': emailField['isValid'] }"
               :message="{ 'This email is incorrect format': emailField['isInvalid'] }">

        <b-input v-model="emailField['value']" @input="validate(emailField['value'], 'emailField', 'email')"
                 type="email" placeholder="email@example.com" maxlength="30"/>
      </b-field>

      <b-field label="Password" label-position="on-border" class="field-group"
               :type="{ 'is-success': secretField['isValid'], 'is-danger': secretField['isInvalid'] }"
               :message="[
						 	  { 'Password must have at least 6 characters': secretField['isInvalid'] },
						 		{ 'Password must have only Latin characters': secretField['isInvalid'] },
						 		{ 'Password must have at least 1 capital character': secretField['isInvalid'] },
						 		{ 'Password must have at least 1 digit character': secretField['isInvalid'] }
						 ]">
        <b-input v-model="secretField['value']" @input="validate(secretField['value'], 'secretField', 'secret')"
                 type="password" placeholder="Type your password" minlength="6" maxlength="14"/>
      </b-field>
      <div class="field login-button-field">
        <div class="control">
          <b-button type="is-primary" class="login-button" label="Login" expanded :loading="loginButton['loading']"
                    :disabled="!(this.emailField['isValid'] && this.secretField['isValid'])"/>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <div class="field is-grouped auth-buttons-fields">
        <div class="control ">
          <b-button @click="showPasswordRestoreModal" type="is-text" class="has-text-primary" label="Forgot Password?"
                    inverted outlined/>
          <b-button @click="showRegisterModal" type="is-text" class="has-text-primary" label="Register" inverted
                    outlined/>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import validator from "../../services/validator";
  import forgotPassword from "../../components/modal-card/forgotPassword";
  import registerUser from "../../components/modal-card/registerUser";

  export default {
    name: "LoginForm",
    data() {
      return {
        emailField: {
          isValid: false,
          isInvalid: false,
          value: null
        },
        secretField: {
          isValid: false,
          isInvalid: false,
          value: null
        },
        loginButton: {
          loading: false
        }
      }
    },
    methods: {
      validate(value, field, type) {
        return validator(value, field, type) ? this.setValidField(field) : this.setInvalidField(field)
      },
      setValidField(field) {
        this[field].isValid = true;
        this[field].isInvalid = false;
      },
      setInvalidField(field) {
        this[field].isInvalid = true;
        this[field].isValid = false;
      },
      showPasswordRestoreModal() {
        this.$buefy.modal.open({
          parent: this,
          component: forgotPassword,
          hasModalCard: true
        })
      },
      showRegisterModal() {
        this.$buefy.modal.open({
          parent: this,
          component: registerUser,
          hasModalCard: true
        })
      }
    }
  }
</script>

<style scoped>
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
</style>
