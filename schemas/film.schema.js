const Joi = require('joi');

//Declare the properties
const id = Joi.number().integer();
const image = Joi.string().uri();
const title = Joi.string().min(3);
const score = Joi.number().integer();
const genderId = Joi.number().integer();
const filmId = Joi.number().integer();
const characterId = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();
const name = Joi.string();
const genre = Joi.number().integer();
const order = Joi.string().valid('ASC','DESC');

//Declare Schemas for Creation, Update, Get or others needed
const createFilmSchema = Joi.object({
  image: image.required(),
  title: title.required(),
  score: score.required(),
  genderId: genderId.required()
});

const updateFilmSchema = Joi.object({
  image: image,
  title: title,
  score: score,
  genderId: genderId
});

const getFilmSchema = Joi.object({
  id: id.required()
});

const queryFilmSchema = Joi.object({
  limit,
  offset,
  name,
  genre,
  order
});

//Schema to character addition for N-N relation
const addCharacterToFilmSchema = Joi.object({
  filmId: filmId.required(),
  characterId: characterId.required(),
});

// Export the schemas
module.exports = {
  createFilmSchema,
  updateFilmSchema,
  getFilmSchema,
  addCharacterToFilmSchema,
  queryFilmSchema
}
