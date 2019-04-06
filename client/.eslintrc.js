module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    "react",
  ],
  rules: {
    "quotes": ["error", "double"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/sort-prop-types": ["error", {
      "callbacksLast": false,
      "ignoreCase": true,
      "requiredFirst": false,
      "sortShapeProp": true,
      "noSortAlphabetically": false,
    }],
  },
};
