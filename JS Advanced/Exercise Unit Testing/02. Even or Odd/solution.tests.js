const assert = require('chai').assert;
const isOddOrEven = require('./solution');

describe('isOddOrEven', function () {
    it('return undefined with number', function () {
        assert.equal(isOddOrEven(13), undefined);

    });

    it('return undefined with object', function () {
        assert.equal(isOddOrEven({name: 'test'}), undefined);
    });

    it('return even', function () {
        assert.equal(isOddOrEven('test'), 'even');
    });

    it('return odd', function () {
        assert.equal(isOddOrEven('testt'), 'odd');
    });

    it('Multiple checks, with multiple variables should return everything OK', function () {
        assert.equal(isOddOrEven('blabla'), 'even');
        assert.equal(isOddOrEven('blabla2'), 'odd');
        assert.equal(isOddOrEven('t'), 'odd');
    });

});