const assert = require('chai').assert;
const expect = require('chai').expect;
const mathEnforcer = require('./solution');

describe('mathEnforcer', function () {

    describe('addFive', function () {
        it('non-number, return undefined', function () {
            assert.isUndefined(mathEnforcer.addFive('test'));
        });

        it('positive number, return correct result', function () {
            assert.equal(mathEnforcer.addFive(5), 10);
        });

        it('negative number, return correct result', function () {
            assert.equal(mathEnforcer.addFive(-5), 0);
        });

        it('floating point number, return correct result', function () {
            assert.equal(mathEnforcer.addFive(5.5), 10.5);
        });

    });

    describe('subtractTen', function () {

        it('non number, return undefined', function () {
            assert.isUndefined(mathEnforcer.subtractTen('test'));
        });

        it('positive number, return correct result', function () {
            assert.equal(mathEnforcer.subtractTen(10), 0);
        });

        it('negative number, return correct result', function () {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        });

        it('float point num, return correct result', function () {
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.1);
        });

        it('float point num, return correct result', function () {
            expect(mathEnforcer.subtractTen(20.50)).to.be.closeTo(10.50, 0.1);
        });

    });

    describe('sum', function () {

        it('non-number num one, return undefined', function () {
            assert.isUndefined(mathEnforcer.sum('test', 2));
        });

        it('non-number num two, return undefined', function () {
            assert.isUndefined(mathEnforcer.sum(2, 'test'));
        });

        it('non number, return undefined', function () {
            assert.isUndefined(mathEnforcer.sum('bla', 'bla'));
        });

        it('return 4', function () {
            assert.equal(mathEnforcer.sum(2, 2), 4);
        });

        it('return 5.5', function () {
            assert.equal(mathEnforcer.sum(2, 3.5), 5.5);
        });

        it('return 4.8', function () {
            assert.equal(mathEnforcer.sum(2.8, 2), 4.8);
        });

        it('return 20.35', function () {
            assert.equal(mathEnforcer.sum(10.20, 10.15), 20.35);
        });

        it('return 0', function () {
            assert.equal(mathEnforcer.sum(2, -2), 0);
        });

        it('return -2.5', function () {
            assert.equal(mathEnforcer.sum(0, -2.5), -2.5);
        })

    });

});