
require('dotenv').config(); // Load environment variables from .env file

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

pool.on("error", (error, client) => {
  console.log(error);
});

module.exports = {
  pool
};


