
const db = require('./index.js');
const generate = require('./generateData.js');

const data = generate();

const seed = () => {
  for (let i = 0; i < data.length; i += 1) {
    const doc = data[i];
    db.save(doc);
  }
};

seed();
