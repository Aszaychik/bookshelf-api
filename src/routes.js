import { getHandler } from './handlers.js';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: getHandler,
  },
  //   {
  //     method: 'POST',
  //     path: '/',
  //     handler: postHandler,
  //   },
];

export default routes;
