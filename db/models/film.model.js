const { Model, DataTypes, Sequelize} = require('sequelize');

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
  }
}

class Film extends Model {
  static associate() {
    //Relations for the entity
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
