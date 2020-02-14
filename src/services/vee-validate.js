import { required, confirmed, length, email, alpha, min, max } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend('required', {
  ...required,
  message: '{_field_} field is required'
});

extend('email', {
  ...email,
  message: 'This value is not valid email'
});

extend('alpha', {
  ...alpha,
  message: '{_field_} field may only contain alphabetic characters'
});

extend('password', {  //minmax:4,6
  validate(value) {
    return /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\w])[\w]{6,14}$/.test(value)
  },
  message: '{_field_} must have at least 1 digit and 1 capital letter, min 6 and max 14 Latin characters'
});

extend('confirmed', {
  ...confirmed,
  message: 'This {_field_} field confirmation does not match'
});

extend('length', {
  ...length,
  params: ['length'],
  message: 'This {_field_} field must be {length} long'
});

extend('min', {
  ...min,
  message: '{_field_} field must be at least {length} characters'
});

extend('max', {
  ...max,
  message: '{_field_} field may not be greater than {length} characters'
});

extend('minmax', {  //minmax:4,6
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max'],
  message: 'The {_field_} field must have at least {min} characters and {max} characters at most'
});

extend('birthday', {
  validate(value) {
    return !!Date.parse(value);
  },
  message: 'The {_field_} field is not valid date!'
});
