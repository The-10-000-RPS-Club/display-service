/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Model = require('../database/model.js');

const PORT = 3002;

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/products/:id', async (req, res) => {
  await Model.findOne({ where: { id: req.params.id } })
    .then((data) => res.send(data))
    .catch(() => { res.sendStatus(500); });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at: ${PORT}`);
});

module.exports = app;
