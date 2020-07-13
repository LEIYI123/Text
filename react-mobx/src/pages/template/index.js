import { dynamic } from '../../utils';

const Template = dynamic(import('./Template'));

const routes = [{ path: 'template', exact: true, component: Template }];

export { routes };
