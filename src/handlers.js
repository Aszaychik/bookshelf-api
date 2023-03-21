import { books } from './books.js';

// export const getHandler = async (request, h) => {
//   try {
//     status: 'success',
//     data : {
//     return {
//       books,
//     }
//     },
//   } catch (error) {
//     console.error(error);
//     return h.response('An error occurred').code(500);
//   }
// };

// export const postHandler = async (request, h) => {
//   try {
//     const payload = request.payload;
//     // some code to handle the payload
//     return h.response('Data received');
//   } catch (error) {
//     console.error(error);
//     return h.response('An error occurred').code(500);
//   }
// };
export const getHandler = () => ({
  status: 'success',
  data: {
    books,
  },
});
