import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from './components/landing.vue';

Vue.use(VueRouter);

let routes = [
  {
    path: '/',
    component: Landing,
  },
];

export default new VueRouter({ mode: 'history', routes });
