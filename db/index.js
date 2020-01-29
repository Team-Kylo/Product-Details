/* eslint-disable arrow-body-style */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products', { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((error) => console.log(error));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connected');
});

const Model = require('./Product.js');

const loadProducts = (data) => {
  return Model.Product.insertMany(data);
};

const fetchDocs = (callback) => {
  Model.Product.find()
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports.loadProducts = loadProducts;
module.exports.fetchDocs = fetchDocs;
