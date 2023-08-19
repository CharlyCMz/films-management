const { Model, DataTypes } = require('sequelize');

const CHARACTER_TABLE = 'characters';

const CharacterSchema = {
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
  name:  {
    allowNull: false,
    type: DataTypes.STRING
  },
  age:  {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  weight:  {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  backstory:  {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Character extends Model {
  static associate(models) {
    this.belongsToMany(models.Film, {
      as: 'films',
      through: models.CharacterFilm,
      foreignKey: 'filmId',
      otherKey: 'characterId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CHARACTER_TABLE,
      modelName: 'Character',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
}

module.exports = { CHARACTER_TABLE, CharacterSchema, Character }
