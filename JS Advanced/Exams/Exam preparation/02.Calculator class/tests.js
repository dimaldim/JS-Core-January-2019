const assert = require('chai').assert;
const Calculator = require('./calculator');

describe('Calculator', function ()
{
	let calculator;
	beforeEach(() =>
	{
		calculator = new Calculator();
	});

	it('should have property expenses', function ()
	{
		assert.property(calculator, 'expenses');
	});

	it('should add string', function ()
	{
		calculator.add('test');
		calculator.add(1);
		calculator.add(true);
		calculator.add(2.2);

		assert.equal(calculator.expenses.length, 4);
	});

	it('should throw error', function ()
	{
		calculator.add('test');
		calculator.add('another test');

		assert.throws(function ()
		{
			calculator.divideNums()
		}, 'There are no numbers in the array!');
	});

	it('should not divide by zero', function ()
	{
		calculator.add(10);
		calculator.add(0);

		let result = calculator.divideNums();
		let expectedResult = 'Cannot divide by zero';

		assert.equal(result, expectedResult);
	});

	it('should divideNums', function ()
	{
		calculator.add(10);
		calculator.add(10);

		let result = calculator.divideNums();
		let expectedResult = 1;

		assert.equal(result, expectedResult);
	});

	it('toString should empty array', function ()
	{
		let result = calculator.toString();
		let expectedResult = 'empty array';

		assert.equal(result, expectedResult);
	});

	it('toString should return 1 -> 2', function ()
	{
		calculator.add(1);
		calculator.add(2);

		let result = calculator.toString();
		let expectedResult = '1 -> 2';

		assert.equal(result, expectedResult);
	});

	it('order by return empty array', function ()
	{
		let result = calculator.orderBy();
		let expectedResult = 'empty';

		assert.equal(result, expectedResult);
	});

	it('order by should return 10, 2, test', function ()
	{
		calculator.add(10);
		calculator.add(2);
		calculator.add('test');

		let result = calculator.orderBy();
		let expectedResult = '10, 2, test';

		assert.equal(result, expectedResult);
	});
});