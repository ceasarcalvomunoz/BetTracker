require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});


pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error to connect to Database', err.stack);
  }
  console.log('Successfully connect to DataBase ');
});

module.exports = pool;
