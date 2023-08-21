const express = require("express");
const router = express.Router();
const passport = require('passport');

const GenderService = require('./../services/genders.service');
const validationHandler = require('./../middlwares/validation.handler');
const { createGenderSchema, updateGenderSchema, getGenderSchema} = require('../schemas/gender.schema');

const genderService = new GenderService();

// GetAll
router.get('/', async (req, res, next) => {
  try {
    const genders = await genderService.find();
    res.status(200).json(genders);
  } catch (error) {
    next(error);
  }
});

// GetById
router.get(
  '/:id',
  validationHandler(getGenderSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const gender = await genderService.findOne(id);
      res.status(200).json(gender);
    } catch (error) {
      next(error);
    }
});

// Create Entity
router.post(
  '/',
  passport.authenticate('jwt', {session: false}),
  validationHandler(createGenderSchema, 'body'),
  async (req, res, next) => {
  try {
    const createdGender = await genderService.create(req.body);
    res.status(201).json(createdGender);
  } catch (error) {
    next(error);
  }
});

// Complete Update
router.put(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validationHandler(getGenderSchema, 'params'),
  validationHandler(updateGenderSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedGender = await genderService.update(id, req.body);
      res.status(200).json(updatedGender);
    } catch (error) {
      next(error);
    }
});

// Partial Update
router.patch(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validationHandler(getGenderSchema, 'params'),
  validationHandler(updateGenderSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedGender = await genderService.update(id, req.body);
      res.status(200).json(updatedGender);
    } catch (error) {
      next(error);
    }
});

// Delete
router.delete(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validationHandler(getGenderSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      await genderService.delete(id);
      res.status(204).send(); // No Content
    } catch (error) {
      next(error);
    }
});

module.exports = router;
