import { between, email, minLength, maxLength, minValue, maxValue, numeric, required, sameAs } from 'vuelidate/lib/validators';

function isPassword(value) {
  const passwordRegEx = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\w])[\w]{6,14}$/;

  if (!value) return true;
  return passwordRegEx.test(value);
}

function isName(value) {
  const nameRegEx = /^[a-zA-Za-яёєiїґA-ЯЁЄIЇҐі]{4,20}$/i;

  if (!value) return true;
  return nameRegEx.test(value);
}

function isBirthday(value) {
  if (!value) return true;
  if (new Date(value).getFullYear() > 1965 || new Date(value).getFullYear() < 2003) return Date.parse(value);
  else return false;
}

export {
  between,
  email,
  minLength,
  maxLength,
  minValue,
  maxValue,
  numeric,
  required,
  sameAs,
  isPassword,
  isName,
  isBirthday
}
