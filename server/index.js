/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const Model = require('../database/model.js');
const mysqlServer = require('../database/mysqlserver.js');

const PORT = 3002;

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

// READ find entries to be viewed and send to the react app to be rendered
app.get('/api/products/:id', async (req, res) => {
  // OG request
  // await Model.findOne({ where: { id: req.params.id } })
  //   .then((data) => res.send(data))
  //   .catch(() => { res.sendStatus(500); });
   await mysqlServer.query('select * from products when id=?;')

});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at: ${PORT}`);
});

module.exports = app;
