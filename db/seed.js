
const db = require('./index.js');
const generate = require('./generateData.js');

const data = generate();

const seed = () => {
  db.loadProducts(data)
    .then(() => {
      console.log('successful db seed');
    })
    .catch((err) => {
      console.log(err);
    });
};

seed();
