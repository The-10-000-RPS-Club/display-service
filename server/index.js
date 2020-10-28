/* eslint-disable no-console */
require('newrelic');
const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
// const compression = require('compression');
// const Model = require('../database/model.js');
const mysqlServer = require('../database/mysqlserver.js');

const PORT = 3002;

const app = express();

app.use('/products/:id', express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../public')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(compression());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   next();
// });

// READ
app.get('/api/products/:id', async (req, res) => {
  await mysqlServer.query(`select * from products where id=${req.params.id};`, (err, data) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(data[0]);
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at: ${PORT}`);
});

module.exports = app;
