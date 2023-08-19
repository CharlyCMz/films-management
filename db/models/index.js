const { CharacterSchema, Character } = require('./character.model');
const { FilmSchema, Film } = require('./film.model');
const { GenderSchema, Gender } = require('./gender.model');

function setupModels(sequelize) {
  Character.init(CharacterSchema, Character.config(sequelize));
  Film.init(FilmSchema, Film.config(sequelize));
  Gender.init(GenderSchema, Gender.config(sequelize));

  Gender.associate(sequelize.models);
  Film.associate(sequelize.models);
}

module.exports = setupModels;
