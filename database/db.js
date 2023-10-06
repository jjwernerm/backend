require("dotenv").config();

const { Pool } = require('pg');

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

const pool = new Pool({
  host: host,
  user: user,
  password: password,
  database: database,
  port: 5432,
  allowExitOnIdle: true,
});

module.exports = pool;

