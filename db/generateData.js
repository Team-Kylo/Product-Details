/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const faker = require('faker');

const fakeData = [];

const generate = () => {
  for (let i = 0; i < 100; i++) {
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
        sum += prob[key];
        if (r <= sum) return key;
      }
    };
    const countryArray = () => {
      const countryList = [];
      for (let j = 0; j < 100; j++) {
        countryList.push(faker.address.country());
      }
      return countryList;
    };

    // faker.lorem.sentences(),
    const doc = {
      id: i,
      sellerName: faker.internet.userName(),
      itemDescription: faker.commerce.productName(),
      itemPrice: faker.commerce.price(),
      itemSpecs: {
        cm: `${randCm} cm`,
        materialA: faker.commerce.productMaterial(),
        materialB: `${faker.commerce.productMaterial()} ${faker.commerce.productMaterial()}`,
        materialC: `${faker.commerce.productMaterial()} ${faker.commerce.productMaterial()}`,
        materialD: `${faker.commerce.productMaterial()} ${faker.commerce.productMaterial()} ${faker.commerce.productMaterial()}`,
        materialE: faker.lorem.words(7),
        materialF: faker.lorem.words(10),
        materialG: faker.lorem.words(12),
      },
      shippingTime: `Standard: ${shipMin}-${shipMax} Business Days`,
      shippingLoc: { city: faker.address.city(), country: faker.address.country() },
      rating: weightedRandom({
        0: 0.015, 1: 0.035, 2: 0.05, 3: 0.1, 4: 0.3, 5: 0.5,
      }),
      reviewCount: randReviewCount,
      watchList: watchListCount,
      quantity: quantityLeft,
      avatar: `https://picsum.photos/id/${150 + i}/75/75`,
      countryList: countryArray(),
    };
    fakeData.push(doc);
  }
  return fakeData;
};

module.exports = generate;
