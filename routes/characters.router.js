const express = require("express");
const router = express.Router();
const passport = require('passport');

const CharacterService = require('./../services/characters.service');
const validationHandler = require('./../middlwares/validation.handler');
const {
  createCharacterSchema,
  updateCharacterSchema,
  getCharacterSchema,
  queryCharacterSchema
} = require('../schemas/character.schema');

const characterService = new CharacterService();

// GetAll
router.get(
  '/',
  validationHandler(queryCharacterSchema, 'query'),
  async (req, res, next) => {
  try {
    const characters = await characterService.find(req.query);
    res.status(200).json(characters);
  } catch (error) {
    next(error);
  }
});

// GetById
router.get(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validationHandler(getCharacterSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const character = await characterService.findOne(id);
      res.status(200).json(character);
    } catch (error) {
      next(error);
    }
});

// Create Entity
router.post(
  '/',
  passport.authenticate('jwt', {session: false}),
  validationHandler(createCharacterSchema, 'body'),
  async (req, res, next) => {
    try {
      const createdCharacter = await characterService.create(req.body);
      res.status(201).json(createdCharacter);
    } catch (error) {
      next(error);
    }
});

// Complete Update
router.put(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validationHandler(getCharacterSchema, 'params'),
  validationHandler(updateCharacterSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedCharacter = await characterService.update(id, req.body);
      res.status(200).json(updatedCharacter);
    } catch (error) {
      next(error);
    }
});

// Partial Update
router.patch(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validationHandler(getCharacterSchema, 'params'),
  validationHandler(updateCharacterSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedCharacter = await characterService.update(id, req.body);
      res.status(200).json(updatedCharacter);
    } catch (error) {
      next(error);
    }
});

// Delete
router.delete(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validationHandler(getCharacterSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      await characterService.delete(id);
      res.status(204).send(); // No Content
    } catch (error) {
      next(error);
    }
});

module.exports = router;
