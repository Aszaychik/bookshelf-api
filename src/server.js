import Hapi from '@hapi/hapi';
import routes from './routes.js';

const server = new Hapi.Server({ port: 9000, host: 'localhost' });

server.route(routes);

const start = async () => {
  try {
    await server.start();
    console.log('Server running on %s', server.info.uri);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
