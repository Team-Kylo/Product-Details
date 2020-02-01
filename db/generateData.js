/* eslint-disable max-len */
const faker = require('faker');

const fakeData = [];

const generate = () => {
  for (let i = 0; i < 100; i += 1) {
    // Math.floor(Math.random() * (max - min)) + min
    const shipMin = Math.floor(Math.random() * (3) + 1);
    const shipMax = Math.floor(Math.random() * (10) + 5);
    const randomNum = Math.floor(Math.random() * (1000) + 200);
    // faker.lorem.sentences(),
    const doc = {
      id: i,
      sellerName: faker.internet.userName(),
      itemDescription: faker.commerce.productName(),
      itemPrice: faker.commerce.price(),
      itemSpecs: {
        cm: randomNum,
        materialA: faker.commerce.productMaterial(),
        materialB: `${faker.commerce.productMaterial()} ${faker.commerce.productMaterial()}`,
        materialC: `${faker.commerce.productMaterial()} ${faker.commerce.productMaterial()}`,
        materialD: `${faker.commerce.productMaterial()} ${faker.commerce.productMaterial()} ${faker.commerce.productMaterial()}`,
      },
      shippingTime: `Standard: ${shipMin}-${shipMax} Business Days`,
      shippingLoc: faker.address.city(),
    };
    fakeData.push(doc);
  }
  return fakeData;
};

module.exports = generate;
