const express = require("express");
const router = express.Router();

const UserService = require('./../services/users.service');
const validationHandler = require('./../middlwares/validation.handler');
const { createUserSchema, updateUserSchema, getUserSchema} = require('../schemas/user.schema');

const userService = new UserService();

// GetAll
router.get('/', async (req, res, next) => {
  try {
    const users = await userService.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// GetById
router.get(
  '/:id',
  validationHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const user = await userService.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
});

// Create Entity
router.post(
  '/',
  validationHandler(createUserSchema, 'body'),
  async (req, res, next) => {
  try {
    const createdUser = await userService.create(req.body);
    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
});

// Complete Update
router.put(
  '/:id',
  validationHandler(getUserSchema, 'params'),
  validationHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedUser = await userService.update(id, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
});

// Partial Update
router.patch(
  '/:id',
  validationHandler(getUserSchema, 'params'),
  validationHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedUser = await userService.update(id, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
});

// Delete
router.delete(
  '/:id',
  validationHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      await userService.delete(id);
      res.status(204).send(); // No Content
    } catch (error) {
      next(error);
    }
});

module.exports = router;
