require("dotenv").config(); // Carga las variables de entorno desde .env
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 54831,
  connectTimeout: 10000,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = db;
