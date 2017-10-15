module.exports = {
  env: {
    browser: true,
    node: true,
  },
  root: true,
  // parser: 'vue-eslint-parser',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    // 'plugin:vue/recommended',
  ],
  plugins: [
    'html',
    // 'vue',
  ],
};
