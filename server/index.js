/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const Model = require('../database/model.js');

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

// CREATE (put/ post) add new entries
app.post('/api/product/:id/insertdisplayItem', async (req, res) => {
});

// READ
app.get('/api/products/:id', async (req, res) => {
  await Model.findOne({ where: { id: req.params.id } })
    .then((data) => res.send(data))
    .catch(() => { res.sendStatus(500); });
});

// UPDATE (put/post/patch) edit existing entries
app.put('/api/product/:id/updatedisplayItem', async (req, res) => {
});

// DELETE (delete) remove entry
app.delete('/api/product/:id/deletedisplayItem', async (req, res) => {
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at: ${PORT}`);
});

module.exports = app;
