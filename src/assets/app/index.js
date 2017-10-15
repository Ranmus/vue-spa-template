import Vue from 'vue';
import Application from './components/Application';

const app = new Vue({
  el: '#app',
  render: (h) => h(Application),
});
