const { Pool } = require('mysql');

const pool = new Pool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'secret',
  database: 'films-manager'
});

module.exports = pool;
