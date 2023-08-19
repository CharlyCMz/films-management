const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: (msg)=> {
    console.log("Sequelize Info: ", msg)
  },
})

setupModels(sequelize);

module.exports = sequelize;
