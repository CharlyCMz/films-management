const Joi = require('joi');

//Declare the properties
const id = Joi.number().integer();
const image = Joi.string().uri();
const name = Joi.string().min(3).max(20);
const age = Joi.number().integer();
const weight = Joi.number().integer();
const backstory = Joi.string().max(500);

const limit = Joi.number().integer();
const offset = Joi.number().integer();
const weightMin = Joi.number().min(0);
const weightMax = Joi.number().max(800);
const movie = Joi.number().integer();

//Declare Schemas for Creation, Update, Get or others needed
const createCharacterSchema = Joi.object({
  image: image.required(),
  name: name.required(),
  age: age.required(),
  weight: weight.required(),
  backstory: backstory.required()
});

const updateCharacterSchema = Joi.object({
  image: image,
  name: name,
  age: age,
  weight: weight,
  backstory: backstory
});

const getCharacterSchema = Joi.object({
  id: id.required()
});

const queryCharacterSchema = Joi.object({
  limit,
  offset,
  name,
  age,
  weightMin,
  weightMax: weightMax.when('weightMin', {
    is: Joi.number().integer().required(),
    then: Joi.required(),
  }),
  movie
});

// Export the schemas
module.exports = { createCharacterSchema, updateCharacterSchema, getCharacterSchema, queryCharacterSchema }
