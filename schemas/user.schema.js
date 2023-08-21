const Joi = require('joi');

//Declare the properties
const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(5);

//Declare Schemas for Creation, Update, Get or others needed
const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required()
});

const updateUserSchema = Joi.object({
  email: email,
  password: password
});

const getUserSchema = Joi.object({
  id: id.required()
});

// Export the schemas
module.exports = { createUserSchema, updateUserSchema, getUserSchema }
