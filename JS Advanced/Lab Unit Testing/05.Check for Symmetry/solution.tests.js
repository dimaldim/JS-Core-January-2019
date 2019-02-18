const assert = require('chai').assert;
const isSymmetric = require('./solution');

describe('isSymmetric', function () {
    it('should return is valid array', function () {
        let arr = 'test';
        let result = isSymmetric(arr);

        assert.isFalse(result);
    });
    it('should return is symetric', function () {
        let arr = [1, 2, 2, 1];
        let result = isSymmetric(arr);

        assert.isTrue(result);
    });
    it('should return is symetric', function () {
        let arr = [1];
        let result = isSymmetric(arr);

        assert.isTrue(result);
    });
    it('should return is symetric', function () {
        let arr = [1, 2, 1];
        let result = isSymmetric(arr);

        assert.isTrue(result);
    });
    it('should return is not symetric', function () {
        let arr = [1, 2, 5, 1];
        let result = isSymmetric(arr);

        assert.isFalse(result);
    });
    it('should return is not symetric', function () {
        let arr = ['bla', 'bla'];
        let result = isSymmetric(arr);

        assert.isTrue(result);
    });
});