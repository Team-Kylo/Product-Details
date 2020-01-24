const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products', { useUnifiedTopology: true, useNewUrlParser: true }).
  catch((error) => console.log(error));

mongoose.connection.on('error', err => {
  console.log(err);
});

// let productSchema = mongoose.Schema({
//   id: Number,
//   sellerName: String,
//   itemDescription: String,
//   itemPrice: Number,
//   itemSpecs: String,
//   shippingTime: String,
//   shippingLoc: String

// })

// let Product = mongoose.model('Product', productSchema);
const Product = require('./Product.js');

let save = (product) => {
  console.log('prrroodduct', Product);
  let doc = new Product.Product({
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

