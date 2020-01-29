/* eslint-disable no-undef */

const generate = require('../db/generateData.js');

describe('generate data test', () => {
  const mockData = generate();
  it('should genereate array of objects length 100', (done) => {
    expect(Array.isArray(mockData)).toBe(true);
    expect(mockData.length).toBe(100);
    expect(Array.isArray(mockData[0])).toBe(false);
    expect(typeof mockData[0]).toBe('object');
    done();
  });
  it('should have correct properties', (done) => {
    expect(mockData[0].id).toBeDefined();
    expect(mockData[5].sellerName).toBeDefined();
    expect(mockData[70].itemDescription).toBeDefined();
    expect(mockData[40].itemPrice).toBeDefined();
    expect(mockData[15].itemSpecs).toBeDefined();
    expect(mockData[80].shippingTime).toBeDefined();
    expect(mockData[34].shippingLoc).toBeDefined();
    done();
  });
});
