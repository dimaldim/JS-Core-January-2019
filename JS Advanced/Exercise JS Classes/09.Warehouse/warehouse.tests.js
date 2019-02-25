const assert = require('chai').assert;
const expect = require('chai').expect;
const Warehouse = require('./warehouse');

describe('Warehouse', () => {

    it('Initialize with 0, return "Invalid given warehouse space"', () => {
        expect(let warehouse = new Warehouse(1).to.throw('Invalid given warehouse space'));
    });

    it('Initialize with -1, return "Invalid given warehouse space"', () => {
        expect(() => {
            let warehouse = new Warehouse(-1).to.throw('Invalid given warehouse space');
        });
    });

    it('Initialize with 10, return it', () => {
        let warehouse = new Warehouse(10);

        assert.equal(warehouse.capacity, 10);
    });

});

describe('Warehouse add product', () => {
    it('Not enough space, return "There is not enough space or the warehouse is already full"', () => {
        let warehouse = new Warehouse(13);
        expect(() => {
            warehouse.addProduct('test', 'Product #1', 2).to.throw('There is not enough space or the warehouse is already full');
        });
    });
});