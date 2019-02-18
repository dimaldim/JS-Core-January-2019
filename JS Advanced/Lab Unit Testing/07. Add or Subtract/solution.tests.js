const assert = require('chai').assert;
const createCalculator = require('./solution');

describe('createCalculator', function () {
    let calculator;
    beforeEach(function () {
        calculator = createCalculator();
    });

    it('return zero', function () {
        let result = calculator.get();

        assert.equal(result, 0);
    });

    it('return 2', function () {
        calculator.add(1);
        calculator.add(1);

        let result = calculator.get();

        assert.equal(result, 2);
    });

    it('return -10', function () {
        calculator.subtract(10);
        let result = calculator.get();

        assert.equal(result, -10);
    });

    it('return 5', function () {
        calculator.add(10);
        calculator.subtract(5);
        let result = calculator.get();

        assert.equal(result, 5);
    });

    it('return 6', function () {
        calculator.add(5);
        calculator.subtract(3);
        calculator.add(6);
        calculator.subtract(2);
        let result = calculator.get();

        assert.equal(result, 6);
    });

    it('return 2', function () {
        calculator.add(10);
        calculator.subtract('7');
        calculator.add('-2');
        calculator.subtract(-1);

        let result = calculator.get();

        assert.equal(result, 2);
    });

    it('return NaN', function () {
        calculator.add('test');

        let result = calculator.get();

        assert.isNaN(result);
    });
    it('return NaN', function () {
        calculator.subtract('test');

        let result = calculator.get();

        assert.isNaN(result);
    });

});