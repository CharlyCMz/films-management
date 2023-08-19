const { Model, DataTypes, Sequelize} = require('sequelize');

const GENDER_TABLE = 'genders';

const GenderSchema = {
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
  }
}

class Gender extends Model {
  static associate() {
    //Relations for the entity
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: GENDER_TABLE,
      modelName: 'Gender',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
}

module.exports = { GENDER_TABLE, GenderSchema, Gender }
