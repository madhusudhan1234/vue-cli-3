import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './modules/moments/pages/Index.vue';
import momentRouter from './modules/moments/routes';
import profileRouter from './modules/profile/routes';

Vue.use(VueRouter);

const baseRoutes = [
  {
    path: '/moment',
    name: 'moment:index',
    component: Index,
  },
];

const routes = baseRoutes.concat(momentRouter, profileRouter);

export default new VueRouter({
  routes,
});