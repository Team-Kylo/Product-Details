var faker = require('faker');
var db = require('./index.js');

var seed = function() {
  for (var i = 0; i < 100; i++) {
    var testProd = {
      "id": i,
      "seller": faker.name.findName(),
      "desc": "mint condition item",
      "price": 12,
      "specs": "handmade",
      "shipping": "3-5 days",
      "loc": "Detroit"
    }
    db.save(testProd);
  }
}

seed();


