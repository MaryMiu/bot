module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true
  },
  "extends": "htmlacademy/es5",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-invalid-this": "off"
  }
};
