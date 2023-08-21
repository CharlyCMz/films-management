const express = require("express");

const characterRouter = require('./characters.router');
const filmsRouter = require('./films.router');
const genderRouter = require('./genders.router');
const userRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/characters', characterRouter);
  router.use('/movies', filmsRouter);
  router.use('/genders', genderRouter);
  router.use('/users', userRouter);
}

module.exports = routerApi;
