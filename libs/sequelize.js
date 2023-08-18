const { Sequelize } = require('sequelize');

const config = require('../config/config');
const modelsSetUp = require('../models/index');

const URI = `mysql://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
})

modelsSetUp(sequelize);

sequelize.sync();

module.exports = sequelize;
