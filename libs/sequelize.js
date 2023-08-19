const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../models/index');

const URI = `mysql://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

try {
  const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
    logging: (msg)=> {
      console.log("Sequelize Info: ", msg)
    },
  })

  setupModels(sequelize);

  sequelize.sync();

} catch (error) {
  console.error('Error connecting to the database:', error.message);
}

module.exports = sequelize;
