import Create from './pages/Create.vue';
import Index from './pages/Index.vue';

const routes = [
  {
    path: '/moment',
    name: 'moment:index',
    component: Index,
  },
  {
    path: '/moment/create',
    name: 'moment:create',
    component: Create,
  },
];

export default routes;