import SecureLS from 'secure-ls';

const ls = new SecureLS({
  encodingType: 'aes',
  isCompression: false,
  encryptionSecret: process.env.VUE_APP_CONTROL_STRING
});

export default {
  getItem: key => ls.get(key),
  setItem: (key, value) => ls.set(key, value),
  removeItem: key => ls.remove(key)
};
