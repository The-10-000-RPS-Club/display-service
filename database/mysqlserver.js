/* eslint-disable no-console */

const mysql = require('mysql');
// const app = require('../server/index.js');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'display',
// });

// connection.connect((err) => {
//   if (err) {
//     console.log(err, 'error in database connection');
//   }
//   console.log('connected to MYSQL server');
// });

// module.exports = connection;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'display',
  connectionLimit: 20,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log( 'error in pool connection: ', err);
  }
});

module.exports = pool;
