const express = require("express");
const router = express.Router();

const FilmService = require('./../services/films.service');

const filmService = new FilmService();

// GetAll
router.get('/', async (req, res, next) => {
  try {
    const films = await filmService.find();
    res.status(200).json(films);
  } catch (error) {
    next(error);
  }
});

// GetById
router.get('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const film = await filmService.findOne(id);
    res.status(200).json(film);
  } catch (error) {
    next(error);
  }
});

// Create Entity
router.post('/', async (req, res, next) => {
  try {
    const createdFilm = await filmService.create(req.body);
    res.status(201).json(createdFilm);
  } catch (error) {
    next(error);
  }
});

// Complete Update
router.put('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updatedFilm = await filmService.update(id, req.body);
    res.status(200).json(updatedFilm);
  } catch (error) {
    next(error);
  }
});

// Partial Update
router.patch('/:id', async (req, res, next) => {

  try {
    const id = parseInt(req.params.id, 10);
    const updatedFilm = await filmService.update(id, req.body);
    res.status(200).json(updatedFilm);
  } catch (error) {
    next(error);
  }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    await filmService.delete(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
