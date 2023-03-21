/* eslint-disable max-len */
import { getBooksHandler, storeBookHandler, getDetailBookHandler, updateBookByIdHandler, deleteBookByIdHandler } from './handlers.js';

const routes = [
  {
    method: 'GET',
    path: '/books',
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
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

export default routes;
