# Vue SPA Template
This is clean template for use as a base to new SPA project.

## Current Setup:
 * Webpack for bundling project,
 * Vue component files supported,
 * **Plain HTML** and **Pug** templates supported,
 * **Plain CSS** and **Stylus** supported,
 * **Ecmascript 2015-2017** (5-7) features through Babel transpilation (+ Babel-polyfill for support old browsers)
 * [TODO] **Unit tests** with **Jest** and official vue-test-utils
 * **Functional tests** with **Testcafe** + testcate-vue-selectors for grabbing components by their names
 * **Eslint** with AirBNB ruleset,
 * [TODO] Choose proper soure maps generation method ('source-map', 'eval') that depends on current environment,
 * [TODO] Minification,
 * [TODO] PostCSS support,
 * [TODO] Inline CSS styles in development mode due for hot reloading,
 * [TODO] Paths aliasing for components, mixins, filters etc.,
 * [TODO] Webpack Dashboard,
 * [TODO] Vue-router,
 * [TODO] Vuex,
 * [TODO] Simple translation mechanism (trans filter and global method) with use of yaml files as dictionaries,

## Usage
___npm run dev___ - Run project in development mode with hot reloading support,
___npm run build___ - Build project (to **compiled** directory)
___npm run test:functional [browser] [path_to_test_file]___ - Run given functional test (Testcafe)
