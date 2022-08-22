const routes = require('./routes');
module.exports = (app) => {
  const { auth, vet, client, ui } = routes;
  app.use('/auth', auth);
  app.use('/vet', vet);
  app.use('/client', client);
  app.use('/mifugo', ui);
};
