const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'display',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Connected to mysql');
});
