var faker = require('faker');
var db = require('./index.js');

var seed = function() {
  for (var i = 0; i < 100; i++) {
    var testProd = {
      "id": i,
      "seller": faker.internet.userName(),
      "desc": faker.lorem.sentence(),
      "price": faker.commerce.price(),
      "specs": faker.lorem.sentences(),
      "shipping": "Standard: 3-5 Business Days",
      "loc": faker.address.city()
    }
    db.save(testProd);
  }
}

seed();


