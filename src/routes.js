import { getBooksHandler, addBookHandler } from './handlers.js';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: getBooksHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
];

export default routes;
