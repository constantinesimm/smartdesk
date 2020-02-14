<template>
  <ValidationProvider tag="div" class="field is-floating-label" :rules="rules" v-slot="{ errors }">
    <label class="label"> {{ $attrs['data-label'] }} </label>
    <div class="control">
      <slot/>
    </div>
    <p :class="{'help is-danger': errors.length }" v-for="message in errors">{{ message }}</p>
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
      }
    }
  };
</script>

<style scoped>
  .control {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0 10px 0 20px;
  }
</style>
