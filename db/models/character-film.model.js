const { Model, DataTypes } = require('sequelize');

const { CHARACTER_TABLE } =require('./character.model');
const { FILM_TABLE } = require('./film.model');

const CHARACTER_FILM_TABLE = 'characters_films';

const CharacterFilmSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  characterId: {
    field: 'character_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CHARACTER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
  },
  filmId: {
    field: 'film_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: FILM_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
  }
}

class CharacterFilm extends Model {
  static associate() {
    //Relations for the entity
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CHARACTER_FILM_TABLE,
      modelName: 'CharacterFilm',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
}

module.exports = { CHARACTER_FILM_TABLE, CharacterFilmSchema, CharacterFilm }
