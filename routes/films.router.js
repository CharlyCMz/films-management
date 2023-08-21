const express = require("express");
const router = express.Router();
const passport = require('passport');

const FilmService = require('./../services/films.service');
const validationHandler = require('./../middlwares/validation.handler');
const {
  createFilmSchema,
  updateFilmSchema,
  getFilmSchema,
  addCharacterToFilmSchema,
  queryFilmSchema
} = require('../schemas/film.schema');

const filmService = new FilmService();

// GetAll
router.get(
  '/',
  validationHandler(queryFilmSchema, 'query'),
  async (req, res, next) => {
  try {
    const films = await filmService.find(req.query);
    res.status(200).json(films);
  } catch (error) {
    next(error);
  }
});

// GetById
router.get(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validationHandler(getFilmSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const film = await filmService.findOne(id);
      res.status(200).json(film);
    } catch (error) {
      next(error);
    }
});

// Create Entity
router.post(
  '/',
  passport.authenticate('jwt', {session: false}),
  validationHandler(createFilmSchema, 'body'),
  async (req, res, next) => {
    try {
      const createdFilm = await filmService.create(req.body);
      res.status(201).json(createdFilm);
    } catch (error) {
      next(error);
    }
});

// Addition of characters to a Film
router.post(
  '/add-character',
  passport.authenticate('jwt', {session: false}),
  validationHandler(addCharacterToFilmSchema, 'body'),
  async (req, res, next) => {
    try {
      const newCharacter = await filmService.addCharacter(req.body);
      res.status(201).json(newCharacter);
    } catch (error) {
      next(error);
    }
});

// Complete Update
router.put(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validationHandler(getFilmSchema, 'params'),
  validationHandler(updateFilmSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedFilm = await filmService.update(id, req.body);
      res.status(200).json(updatedFilm);
    } catch (error) {
      next(error);
    }
});

// Partial Update
router.patch(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validationHandler(getFilmSchema, 'params'),
  validationHandler(updateFilmSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedFilm = await filmService.update(id, req.body);
      res.status(200).json(updatedFilm);
    } catch (error) {
      next(error);
    }
});

// Delete
router.delete(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validationHandler(getFilmSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      await filmService.delete(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
});

module.exports = router;
