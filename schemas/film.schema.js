const Joi = require('joi');

//Declare the properties
const id = Joi.number().integer();
const image = Joi.string().uri();
const title = Joi.string().min(3);
const score = Joi.number().integer();

//Declare Schemas for Creation, Update, Get or others needed
const createFilmSchema = Joi.object({
  image: image.required(),
  title: title.required(),
  score: score.required()
});

const updateFilmSchema = Joi.object({
  image: image,
  title: title,
  score: score
});

const getFilmSchema = Joi.object({
  id: id.required()
});

// Export the schemas
module.exports = { createFilmSchema, updateFilmSchema, getFilmSchema }
