import { dynamic } from './utils';
import { routes as homeRoutes } from './pages/home';
import { routes as templateRoutes } from './pages/template';
import { routes as manageRoutes } from './pages/manage';

// 管理页面
const NotFound = dynamic(import('./components/not-found'));
const IndexLayout = dynamic(import('./layout/index-layout'));

const routes = [
  {
    path: '/',
    component: IndexLayout,
    meta: { auth: false },
    routes: [
      ...manageRoutes,
      ...templateRoutes,
      ...homeRoutes,
      /* eslint-disable */
      { path: '*', component: NotFound }
    ]
  }
];

export { routes };
