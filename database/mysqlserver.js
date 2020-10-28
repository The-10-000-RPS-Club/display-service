/* eslint-disable no-console */

const mysql = require('mysql');
// const app = require('../server/index.js');

// const connection = mysql.createConnection({
//   host: 'ec2-35-160-57-72.us-west-2.compute.amazonaws.com',
//   user: 'smith',
//   password: '*H4CKR34CT0R*',
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
  host: '35.160.57.72',
  user: 'smith',
  password: 'H4CKR34CT0R!',
  database: 'display',
  connectionLimit: 20,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log('error in pool connection: ', err);
  } else if (connection) {
    console.log('you have connected to POOL!');
  }
});

module.exports = pool;

// user: 'smith',
// password: 'H4CKR34CT0R!',
