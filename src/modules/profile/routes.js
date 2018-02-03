import Detail from './pages/Detail.vue';
import Edit from './pages/Edit.vue';

const routes = [
  {
    path: '/detail',
    name: 'profile:detail',
    component: Detail,
  },
  {
    path: '/edit',
    name: 'profile:edit',
    component: Edit,
  },
];

export default routes;