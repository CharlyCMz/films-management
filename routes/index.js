const express = require("express");

const characterRouter = require('./characters.router');
const filmsRouter = require('./films.router');
const genderRouter = require('./genders.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/characters', characterRouter);
  router.use('/movies', filmsRouter);
  router.use('/genders', genderRouter);
}

module.exports = routerApi;
