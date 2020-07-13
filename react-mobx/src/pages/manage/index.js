import { dynamic } from '../../utils';

const Manage = dynamic(import('./Manage'));

const routes = [{ path: 'manage', exact: true, component: Manage }];

export { routes };
