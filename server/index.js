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
  await Model.create({
    id: 0,
    product_name: 'shoes',
    rating: 2.4,
    ratingsAmt: 45,
    price: '$45.99',
    color: 'red, blue,green',
    description: 'a pair of shoes',
    image: 'awsurlgoeshere',
    carousel: 'otherurls',
    clothing_sizes: '12,13,414,2345,3456,5467,5678',
    count: 2,
    show: false,
  })
    .then(() => res.send(201))
    .catch(() => { res.sendStatus(500); });
});

// READ
app.get('/api/products/:id', async (req, res) => {
  await Model.findOne({ where: { id: req.params.id } })
    .then((data) => res.send(data))
    .catch(() => { res.sendStatus(500); });
});

// UPDATE (put/post/patch) edit existing entries
app.put('/api/product/:id', async (req, res) => {
  const update = await Model.create({ where: { id: req.params.id } });
  update.id = req.params.id;
  await update.save()
    .then((data) => res.send(data, 200))
    .catch(() => { res.sendStatus(500); });
});

// DELETE (delete) remove entry
app.delete('/api/product/:id', async (req, res) => {
  await Model.destroy({ where: { id: req.params.id } })
    .then(() => res.send(200))
    .catch(() => { res.sendStatus(500); });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at: ${PORT}`);
});

module.exports = app;
