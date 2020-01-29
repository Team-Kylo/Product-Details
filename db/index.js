
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products', { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((error) => console.log(error));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connected');
});

const Model = require('./Product.js');

const save = (product) => {
  const doc = new Model.Product({
    id: product.id,
    sellerName: product.seller,
    itemDescription: product.desc,
    itemPrice: product.price,
    itemSpecs: product.specs,
    shippingTime: product.shipping,
    loc: product.loc,
  });

  doc.save((err) => {
    if (err) {
      console.log('error saving to db');
      return;
    }
    console.log('successful save to db');
  });
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

module.exports.save = save;
module.exports.fetchDocs = fetchDocs;