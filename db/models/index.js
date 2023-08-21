const { CharacterSchema, Character } = require('./character.model');
const { FilmSchema, Film } = require('./film.model');
const { GenderSchema, Gender } = require('./gender.model');
const { UserSchema, User} = require('./user.model');
const { CharacterFilmSchema, CharacterFilm } = require('./character-film.model');

function setupModels(sequelize) {
  Character.init(CharacterSchema, Character.config(sequelize));
  Film.init(FilmSchema, Film.config(sequelize));
  Gender.init(GenderSchema, Gender.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  CharacterFilm.init(CharacterFilmSchema, CharacterFilm.config(sequelize));

  Gender.associate(sequelize.models);
  Film.associate(sequelize.models);
  Character.associate(sequelize.models);
}

module.exports = setupModels;
