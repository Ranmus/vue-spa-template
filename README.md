# Vue SPA Template
This is clean template for use as a base to new SPA project.

## Current Setup:
 * Webpack for bundling project,
 * Vue component files supported,
 * **Plain HTML** and **Pug** templates supported,
 * **Plain CSS** and **Stylus** supported,
 * **Ecmascript 2015-2017** (5-7) features through Babel transpilation (+ Babel-polyfill for old browsers support)
 * [TODO] **Unit tests** with **Jest** and official vue-test-utils
 * **Functional tests** with **Testcafe** + testcate-vue-selectors for grabbing components by their names
 * **Eslint** with AirBNB ruleset,
 * Devtools: source-map for production and eval-source-map for development
 * Minification: UglifyJS,
 * PostCSS support for Vue component files,
 * Inline CSS styles in development mode due for hot reloading,
 * [TODO] Paths aliasing for components, mixins, filters etc.,
 * Webpack Dashboard in development mode,
 * [TODO] Docs custom block in Vue files,
 * [TODO] Vue-router,
 * [TODO] Vuex,
 * [TODO] Simple translation mechanism (trans filter and global method) with use of yaml files as dictionaries,

## Usage
 * ___npm run dev___ - Run project in development mode with hot reloading support,
 * ___npm run build___ - Build project (to **compiled** directory)
 * ___npm run test:functional [browser] [path_to_test_file]___ - Run given functional test (Testcafe)
