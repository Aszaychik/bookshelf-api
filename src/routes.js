/* eslint-disable max-len */
import { getBooksHandler, storeBookHandler, getDetailBookHandler, updateBookByIdHandler } from './handlers.js';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: getBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailBookHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: storeBookHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookByIdHandler,
  },
];

export default routes;
