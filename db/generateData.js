/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const faker = require('faker');

const fakeData = [];

const generate = () => {
  for (let i = 0; i < 100; i += 1) {
    // Math.floor(Math.random() * (max - min)) + min
    const shipMin = Math.floor(Math.random() * (3) + 1);
    const shipMax = Math.floor(Math.random() * (10) + 5);
    const randReviewCount = Math.floor(Math.random() * (1000) + 200);
    const randCm = Math.floor(Math.random() * (800) + 50);
    const watchListCount = Math.floor(Math.random() * (20) + 5);
    const quantityLeft = Math.floor(Math.random() * (8) + 1);
    const weightedRandom = (prob) => {
      let sum = 0;
      const r = Math.random();
      for (const key in prob) {
        sum += prob[i];
        if (r <= sum) return key;
      }
    };

    // faker.lorem.sentences(),
    const doc = {
      id: i,
      sellerName: faker.internet.userName(),
      itemDescription: faker.commerce.productName(),
      itemPrice: faker.commerce.price(),
      itemSpecs: {
        cm: randCm,
        materialA: faker.commerce.productMaterial(),
        materialB: `${faker.commerce.productMaterial()} ${faker.commerce.productMaterial()}`,
        materialC: `${faker.commerce.productMaterial()} ${faker.commerce.productMaterial()}`,
        materialD: `${faker.commerce.productMaterial()} ${faker.commerce.productMaterial()} ${faker.commerce.productMaterial()}`,
      },
      shippingTime: `Standard: ${shipMin}-${shipMax} Business Days`,
      shippingLoc: { city: faker.address.city(), country: faker.address.country() },
      rating: weightedRandom({
        0: 0.015, 1: 0.035, 2: 0.05, 3: 0.1, 4: 0.3, 5: 0.5,
      }),
      reviewCount: randReviewCount,
      watchList: watchListCount,
      quantity: quantityLeft,
    };
    fakeData.push(doc);
  }
  return fakeData;
};

module.exports = generate;
