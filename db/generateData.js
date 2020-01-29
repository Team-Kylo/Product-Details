const faker = require('faker');

const fakeData = [];

const generate = () => {
  for (let i = 0; i < 100; i += 1) {
    const doc = {
      id: i,
      sellerName: faker.internet.userName(),
      itemDescription: faker.lorem.sentence(),
      itemPrice: faker.commerce.price(),
      itemSpecs: faker.lorem.sentences(),
      shippingTime: 'Standard: 3-5 Business Days',
      shippingLoc: faker.address.city(),
    };
    fakeData.push(doc);
  }
  return fakeData;
};

module.exports = generate;
