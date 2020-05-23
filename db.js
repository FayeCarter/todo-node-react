const Pool = require("pg").Pool;

const pool = Pool({
  user: 'FayeCarter',
  password: null,
  host: 'localhost',
  port: 5432,
  database: 'todo_database',
});

module.exports = pool;