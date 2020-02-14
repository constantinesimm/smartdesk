<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <div class="modal-card-title has-text-white">
        <b-icon icon="user-plus" size="is-medium"/>
        <span class="is-size-4 modal-card-title-text">Create account</span>
      </div>
    </header>
    <section class="modal-card-body">
      <BInputWithValidation rules="required|email" data-label="Email" data-type="email" data-placeholder="email@example.com" v-model="email"/>

      <hr>
      <b-field class="modal-card-buttons">
        <b-button type="is-white is-outlined has-text-danger" label="Cancel" @click="$parent.close()"/>
        <b-button :loading="isLoadingButton" outlined :disabled="this.email ? false : 'disabled'" type="button is-primary" label="Restore"/>
      </b-field>
    </section>
  </div>
</template>

<script>
  import BInputWithValidation from "../../inputs/BInputWithValidation";

  export default {
    name: "registerUser",
    components: {BInputWithValidation},
    data() {
      return {
        email: '',
        components: {
          BInputWithValidation
        },
        isLoadingButton: false
      }
    }
  }
</script>

<style scoped>
  .modal-card {
    max-width: 450px;
    border-radius: 15px;
  }

  .modal-card-head {
    padding: 15px 20px;
    background-color: #2780E3;
  }

  .modal-card-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-card-title-text {
    font-weight: 500;
    padding-left: 5px;
  }

  hr {
    margin: 1.5rem 0 1rem 0;
  }

  .modal-card-buttons {
    display: flex;
    justify-content: flex-end;
  }
</style>
