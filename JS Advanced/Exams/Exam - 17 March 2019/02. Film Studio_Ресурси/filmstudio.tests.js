const assert = require('chai').assert;
const filmStudio = require('./filmStudio');

describe('Tests', function () {
    let filmStudio;
    beforeEach(() => {
        filmStudio = new filmStudio('New studio');
    });

    it('should have property films', function () {
        assert.property(filmStudio, 'films');
    });

    it('should throw error', function() {
        assert.throws(function() {
            filmStudio.makeMovie('test', 'test');
        }, 'Invalid arguments');
    });

    it('should throw error #2', function() {
        assert.throws(function() {
            filmStudio.makeMovie('test');
        }, 'Invalid arguments count');
    });

    it('should test casting', function() {
        let test = filmStudio.casting('Dimitar', 'test');
        assert.equal(test, 'There are no films yet in New studio');
    });
    it('should test casting', function() {
        let test = filmStudio.casting('Dimitar #2', 'test');
        assert.equal(test, 'There are no films yet in New studio');
    });
});