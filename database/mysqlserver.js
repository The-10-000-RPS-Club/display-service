/* eslint-disable no-console */

const mysql = require('mysql');
// const app = require('../server/index.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'display',
});

connection.connect((err) => {
  if (err) {
    console.log(err, 'error in database connection');
  }
  console.log('connected to MYSQL server');
});

module.exports = connection;
