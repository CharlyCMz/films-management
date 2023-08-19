const Joi = require('joi');

//Declare the properties
const id = Joi.number().integer();
const image = Joi.string().uri();
const name = Joi.string().min(3);

//Declare Schemas for Creation, Update, Get or others needed
const createGenderSchema = Joi.object({
  image: image.required(),
  name: name.required()
});

const updateGenderSchema = Joi.object({
  image: image,
  name: name
});

const getGenderSchema = Joi.object({
  id: id.required()
});

// Export the schemas
module.exports = { createGenderSchema, updateGenderSchema, getGenderSchema }
