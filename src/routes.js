/* eslint-disable max-len */
import { getBooksHandler, addBookHandler, getDetailBookHandler } from './handlers.js';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: getBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailBookHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
];

export default routes;
