const fibonacci = require('../index');
var assert = require('assert');


describe('For testing the correct Value', ()=> {
    it('Test f(1) should be 1', ()=> {
        assert.equal(fibonacci(1), 1);
    });
    it('Test f(4) should be 3', ()=> {
        assert.equal(fibonacci(4), 3);
    });
    it('Test f(999) should be f(998)+f(997)', ()=> {
        assert.equal(fibonacci(999), fibonacci(998) + fibonacci(997));
    });
});

describe('For testing the wrong Value', ()=> {
    it('Test f(4) should not be 5', ()=> {
        assert.notEqual(fibonacci(4), 5);
    });
});