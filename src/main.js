import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import './assets/stylesheets/ionicons.min.css';

const vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')