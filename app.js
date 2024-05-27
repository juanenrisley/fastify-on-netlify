const fastify = require('fastify');

function init() {
  const app = fastify();
  app.get('/', (request, reply) => reply.send({ hello: 'world' }));
  return app;
}

init().listen({ port: 3000 }, (err) => {
  if (err) console.error(err);
  console.log('server listening on 3000');
});