const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
  id: Number,
  sellerName: String,
  itemDescription: String,
  itemPrice: Number,
  itemSpecs: String,
  shippingTime: String,
  shippingLoc: String

})

// let Product = mongoose.model('Product', productSchema);

module.exports.Product = mongoose.model('Product', productSchema);