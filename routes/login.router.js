const express = require("express");
const passport = require("passport");
const jwt = require('jsonwebtoken');

const { config } = require('../config/config');

const UserService = require('./../services/users.service');
const validationHandler = require('./../middlwares/validation.handler');
const { createUserSchema } = require('../schemas/user.schema');

const router = express.Router();

const userService = new UserService();

router.post(
  '/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      const tokenPayload ={
        sub: req.user.id,
        role: 'user'
      }
      const token = jwt.sign(tokenPayload, config.jwtKey);
      res.status(200).json({user: req.user, token:token});
    } catch (error) {
      next(error);
    }
});

router.post(
  '/register',
  validationHandler(createUserSchema, 'body'),
  async (req, res, next) => {
  try {
    const createdUser = await userService.create(req.body);
    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
