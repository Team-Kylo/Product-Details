const faker = require('faker');

const fakeData = [];

const generate = () => {
  for (let i = 0; i < 100; i += 1) {
    // Math.floor(Math.random() * (max - min)) + min
    const shipMin = Math.floor(Math.random() * (3) + 1);
    const shipMax = Math.floor(Math.random() * (10) + 5);
    const doc = {
      id: i,
      sellerName: faker.internet.userName(),
      itemDescription: faker.commerce.productName(),
      itemPrice: faker.commerce.price(),
      itemSpecs: faker.lorem.sentences(),
      shippingTime: `Standard: ${shipMin}-${shipMax} Business Days`,
      shippingLoc: faker.address.city(),
    };
    fakeData.push(doc);
  }
  return fakeData;
};

module.exports = generate;
