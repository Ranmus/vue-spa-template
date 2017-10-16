module.exports = {
  env: {
    browser: true,
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'plugin:testcafe/recommended',
  ],
  plugins: [
    'html',
  ],
};
