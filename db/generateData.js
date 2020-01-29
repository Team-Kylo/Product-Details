const faker = require('faker');

const fakeData = [];

const generate = () => {
  for (let i = 0; i < 100; i += 1) {
    const doc = {
      id: i,
      seller: faker.internet.userName(),
      desc: faker.lorem.sentence(),
      price: faker.commerce.price(),
      specs: faker.lorem.sentences(),
      shipping: 'Standard: 3-5 Business Days',
      loc: faker.address.city(),
    };
    fakeData.push(doc);
  }
  return fakeData;
};

module.exports = generate;
