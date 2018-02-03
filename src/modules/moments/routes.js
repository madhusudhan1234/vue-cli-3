import Create from './pages/Create.vue';
import Index from './pages/Index.vue';
import  MomentApp from './MomentApp.vue';

const routes = [
  {
    path: '/moment',
    name: 'moment',
    component: MomentApp,
    redirect: { name: 'moment:index' },
    children: [
      {
        path: 'index',
        name: 'moment:index',
        component: Index,
      },
      {
        path: 'create',
        name: 'moment:create',
        component: Create,
      },
    ],
  },
];

export default routes;