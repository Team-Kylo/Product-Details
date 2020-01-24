const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products', { useUnifiedTopology: true, useNewUrlParser: true }).
  catch((error) => console.log(error));

mongoose.connection.on('error', err => {
  console.log(err);
});

const Product = require('./Product.js');

let save = (product) => {
  let doc = new Product({
    id: product.id,
    sellerName: product.seller,
    itemDescription: product.desc,
    itemPrice: product.price,
    itemSpecs: product.specs,
    shippingTime: product.shipping,
    loc: product.loc
  })

  doc.save((err) => {
    if (err) console.log('error');
  });
}

module.exports.save = save;

