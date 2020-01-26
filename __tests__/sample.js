

// const request = require('supertest');
// const app = require('../server/app.js');

// describe('Test the root path', () => {
//     test('It should response the GET method', () => {
//         return request(app).get('/').expect(200);
//     });
// })

const request = require('supertest');
const app = require('../server/app.js');

describe('Test the root path', () => {
  test('It should response the GET method with 200 status', (done) => {
      request(app).get('/1').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
  test('Should response to GET request with JSON object with specified id prop value', (done) => {
    request(app).get('/1').then((response) => {
      expect(response.body.id).toBe(1);
      done();
    });
    request(app).get('/99').then((response) => {
      expect(response.body.id).toBe(99);
      done();
    });
  });
});