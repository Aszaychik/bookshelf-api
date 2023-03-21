import { getHandler, addBookHandler } from './handlers.js';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: getHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
];

export default routes;
