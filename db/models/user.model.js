const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email:  {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  password:  {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class User extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
