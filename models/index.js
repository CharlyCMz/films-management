const { CharacterSchema, Character } = require('./character.model');
const { FilmSchema, Film } = require('./film.model');
const { GenderSchema, Gender } = require('./gender.model');

function modelsSetUp(sequelize) {
  Character.init(CharacterSchema, Character.config(sequelize));
  Film.init(FilmSchema, Film.config(sequelize));
  Gender.init(GenderSchema, Gender.config(sequelize));
}

module.exports = modelsSetUp;
