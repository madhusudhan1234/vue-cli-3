import Vue from 'vue';
import VueRouter from 'vue-router';
import Friends from './components/Friends.vue';
import InviteUser from './components/InviteUser.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/friends', component: Friends },
  { path: '/invite', component: InviteUser }
]

const router = new VueRouter({
  routes,
})

export default router;