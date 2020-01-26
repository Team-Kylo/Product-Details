// This test fails because 1 !== 2
const app = require('../server/app.js');
const supertest = require('supertest');
const request = supertest(app);

it('Gets all data from / endpoint', async done => {
  const res = await request.get('/');
  console.log(res);
  done();
});