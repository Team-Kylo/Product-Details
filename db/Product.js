const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: Number,
  sellerName: String,
  itemDescription: String,
  itemPrice: Number,
  itemSpecs: Object,
  shippingTime: String,
  shippingLoc: Object,
  rating: Number,
  reviewCount: Number,
  watchList: Number,
  quantity: Number,
  avatar: String,
  countryList: Array,

});

module.exports.Product = mongoose.model('Details', productSchema);
