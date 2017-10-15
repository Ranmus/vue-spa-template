# Vue SPA Template
This is clean template for use as base to new SPA project.

## Current Setup:
 * Webpack for bundling project,
 * Vue component files supported,
 * **Plain HTML** and **Pug** templates supported,
 * **Plain CSS** and **Stylus** supported,
 * **Ecmascript 2015-2017** (5-7) features through Babel transpilation (+ Babel-polyfill for support old browsers)
 * [TODO] **Unit tests** with **Jest** and official vue-test-utils
 * **Functional tests** with **Testcafe** + testcate-vue-selectors for grabbing components by their names
 * **Eslint** with AirBNB ruleset,
 * [TODO] Vue-router,
 * [TODO] Vuex,
 * [TODO] Simple translation mechanism (trans filter and global method) with use of yaml files as dictionaries,
 * [TODO] Choose proper soure maps generation method ('source-map', 'eval') that depends to current environment,
 * [TODO] Minification,
 * [TODO] PostCSS support,
 * [TODO] Prevent extracting CSS styles in development mode due to blocking hot reloading feature,
 * [TODO] Path aliasing for components, mixins, filters etc.,
 * [TODO] Webpack Dashboard,

## Usage
___npm run dev___ - Run project in development mode with hot reloading support,
___npm run build___ - Build project (to **compiled** directory)
___npm run test:functional [browser] [path_to_test_file]___ - Run given functional test (Testcafe)
