import Vue from 'vue';
import VueRouter from 'vue-router';
import Moment from './modules/moments/MomentApp.vue';
import momentRouter from './modules/moments/routes';
import profileRouter from './modules/profile/routes';

Vue.use(VueRouter);

const baseRoutes = [
  {
    path: '/',
    component: Moment,
    redirect: { name: 'moment:index' },
  },
];

const routes = baseRoutes.concat(momentRouter, profileRouter);

export default new VueRouter({
  routes,
});