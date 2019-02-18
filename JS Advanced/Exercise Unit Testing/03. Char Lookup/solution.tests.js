const assert = require('chai').assert;
const lookupChar = require('./solution');

describe('lookupChar', function () {
    const incorrectIndex = 'Incorrect index';

    it('should return undefined', function () {
        let str = 1;
        let index = 1;

        let result = lookupChar(str, index);

        assert.isUndefined(result);
    });

    it('should return undefined', function () {
        let str = 'test';
        let index = 'test';

        let result = lookupChar(str, index);

        assert.isUndefined(result);
    });

    it('should return undefined', function () {
        let str = 'test';
        let index = 1.1;

        let result = lookupChar(str, index);

        assert.isUndefined(result);
    });

    it('should return undefined', function () {
        let str = 1;
        let index = 'test';

        let result = lookupChar(str, index);

        assert.isUndefined(result);
    });

    it('should return incorrect index', function () {
        let str = 'test';
        let index = -1;

        let result = lookupChar(str, index);

        assert.equal(result, incorrectIndex);
    });

    it('should return incorrect index', function () {
        let str = 'test';
        let index = 4;

        let result = lookupChar(str, index);

        assert.equal(result, incorrectIndex);
    });

    it('should return incorrect index', function () {
        let str = 'test';
        let index = 5;

        let result = lookupChar(str, index);

        assert.equal(result, incorrectIndex);
    });

    it('should return "t"', function () {
        let str = 'test';
        let index = 0;

        let result = lookupChar(str, index);

        assert.equal(result, 't');
    });

    it('should return "e"', function () {
        let str = 'test';
        let index = 1;

        let result = lookupChar(str, index);

        assert.equal(result, 'e');
    });
});