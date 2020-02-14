<template>
  <ValidationProvider tag="div" class="field is-floating-label" :rules="rules" v-slot="{ errors, valid }">
    <label id="calendar-label" :class="{'label': !(errors[0] && valid), 'label has-text-danger': errors[0], 'label has-text-success': valid}"> {{ $attrs['data-label'] }} </label>

    <b-datepicker v-model="innerValue" :first-day-of-week="1" :years-range="[-50, 2]"
                  :focused-date="new Date('2000-01-01T00:00:01.000Z')"
                  icon-pack="far" icon="calendar-alt" icon-prev="arrow-alt-circle-left"
                  icon-next="arrow-alt-circle-right" placeholder="Select a date..."/>
    <p :class="{'help is-danger': errors.length }" v-for="message in errors">{{ message.replace(/\{field\}/g, `${ $attrs['data-label'] }`) }}</p>

  </ValidationProvider>
</template>

<script>
  import {ValidationProvider} from "vee-validate";

  //document.querySelector(".bd-calendar > div > div.dropdown-trigger > div > input")

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
        innerValue: null
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
    },
    methods: {
      calendarBodyChange() {
        let labelElement = document.getElementById('calendar-label');
        let calendarInput = document.querySelector('.bd-calendar > div > div.dropdown-trigger > div > input');
      }
    }
  }
</script>

<style scoped>

</style>
