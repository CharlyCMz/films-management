const { Model, DataTypes, Sequelize} = require('sequelize');

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
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Character extends Model {
  static associate() {
    //Relations for the entity
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CHARACTER_TABLE,
      modelName: 'Character',
      timeStamps: false
    }
  }
}

module.exports = { CHARACTER_TABLE, CharacterSchema, Character }
