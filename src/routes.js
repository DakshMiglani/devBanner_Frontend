import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home.vue';

Vue.use(VueRouter);

let routes = [
  {
    path: '/',
    component: Home,
  },
];

export default new VueRouter({ mode: 'history', routes });
