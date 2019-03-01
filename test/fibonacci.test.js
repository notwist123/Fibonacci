const fibonacci = require('../index');
var assert = require('assert');


describe('Unit Test for Fibonacci', ()=> {
  it('Test f(1) = 1', ()=> {
    assert.equal(fibonacci(1), 1);
  });
});