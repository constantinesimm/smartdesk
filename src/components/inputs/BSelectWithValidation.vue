<template>
  <ValidationProvider tag="div" class="field is-floating-label" :rules="rules" v-slot="{ errors, valid }">
    <label :class="{'label': !(errors[0] && valid), 'label has-text-danger': errors[0], 'label has-text-success': valid}"> {{ $attrs['data-label'] }} </label>

    <b-select v-model="innerValue" :class="{'select': !(errors[0] && valid), 'select is-danger': errors[0], 'select is-success': (valid || innerValue)}">
        <slot/>
      </b-select>
    <p :class="{'help is-danger': errors.length }" v-for="message in errors">{{ message.replace(/\{field\}/g, `${ $attrs['data-label'] }`) }}</p>
  </ValidationProvider>
</template>

<script>
  import { ValidationProvider } from "vee-validate";

  export default {
    components: {
      ValidationProvider
    },
    props: {
      vid: {
        type: String
      },
      rules: {
        type: [Object, String],
        default: ""
      },
      // must be included in props
      value: {
        type: null
      }
    },
    data() {
      return {
        innerValue: ""
      }
    },
    watch: {
      // Handles internal model changes.
      innerValue(newVal) {
        this.$emit("input", newVal);
      },
      // Handles external model changes.
      value(newVal) {
        this.innerValue = newVal;
      }
    },
    created() {
      if (this.value) {
        this.innerValue = this.value;
      }
    }
  }
</script>

<style scoped>

</style>
