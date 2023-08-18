const { Pool } = require('mysql');

const config = require('../config/config');

const URI = `mysql://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URI});

module.exports = pool;
