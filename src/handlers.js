/* eslint-disable max-len */
import { books } from './books.js';
import { nanoid } from 'nanoid';
import Joi from 'joi';

export const getHandler = () => ({
  status: 'success',
  data: {
    books,
  },
});

export const addBookHandler = (request, h) => {
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;

  // Check if required field 'name' is present
  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }).code(400);
  }

  // Check if readPage is greater than pageCount
  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  // validation using Joi
  const schema = Joi.object({
    name: Joi.string().required(),
    year: Joi.number().required(),
    author: Joi.string().required(),
    summary: Joi.string().required(),
    publisher: Joi.string().required(),
    pageCount: Joi.number().required(),
    readPage: Joi.number().required(),
    reading: Joi.boolean().required(),
  });

  const { error } = schema.validate(request.payload);

  if (error) {
    return h.response({
      status: 'fail',
      message: error.details[0].message,
    }).code(400);
  }


  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    },
  }).code(201);
};
