const Joi = require('joi');

//Declare the properties
const id = Joi.number().integer();
const image = Joi.string().uri();
const name = Joi.string().min(3).max(20);
const age = Joi.number().integer();
const weight = Joi.number().integer();
const backstory = Joi.string().max(500);

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

// Export the schemas
module.exports = { createCharacterSchema, updateCharacterSchema, getCharacterSchema }
