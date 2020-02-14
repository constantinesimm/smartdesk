<template>
    <ValidationProvider tag="div" :vid="vid" class="field is-floating-label" :rules="rules" v-slot="{ errors, valid }">
      <label :class="{'label': !(errors[0] && valid), 'label has-text-danger': errors[0], 'label has-text-success': valid}"> {{ $attrs['data-label'] }} </label>

      <div class="control has-icons-right">
        <input :type="$attrs['data-type']" :name="$attrs['data-label']" autocomplete="off" v-model="innerValue" :disabled="$attrs['data-disabled']" :placeholder="$attrs['data-placeholder']" :class="{'input': !(errors[0] && valid), 'is-danger': errors[0], 'is-success': valid}"/>
        <b-icon v-if="valid" class="is-right has-text-success" icon="check" size="is-small"/>
        <b-icon v-if="errors[0]" class="is-right has-text-danger" icon="exclamation-circle" size="is-small"/>
      </div>
      <p :class="{'help is-danger': errors.length }" v-for="message in errors"><span v-html="message"></span></p>

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

<style>
  label, input {
    color: #4a4a4ab5!important;
  }
  .is-danger.input{
    border-color: #f14668!important;
  }
  .is-success.input{
    border-color: #3abb67!important;
  }
</style>
