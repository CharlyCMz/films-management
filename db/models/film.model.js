const { Model, DataTypes } = require('sequelize');

const { GENDER_TABLE } =require('./gender.model');

const FILM_TABLE = 'films';

const FilmSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING
  },
  title:  {
    allowNull: false,
    type: DataTypes.STRING
  },
  score: {
    allowNull: true,
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  releaseDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'release_date'
  },
  genderId: {
    field: 'gender_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: GENDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Film extends Model {
  static associate(models) {
    this.belongsTo(models.Gender, { as: 'gender' });
    this.belongsToMany(models.Character, {
      through: models.CharacterFilm,
      foreignKey: 'characterId',
      otherKey: 'filmId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FILM_TABLE,
      modelName: 'Film',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
}

module.exports = { FILM_TABLE, FilmSchema, Film }
