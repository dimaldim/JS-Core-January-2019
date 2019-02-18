const assert = require('chai').assert;
const rgbToHexColor = require('./solution');

describe('rgbToHexColor', function(){
    it('should return correct result', function(){
        let red = 250;
        let green = 250;
        let blue = 250;

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, '#FAFAFA');
    });

    it('should return correct result', function(){
        let red = 0;
        let green = 0;
        let blue = 0;

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, '#000000');
    });

    it('should return correct result', function(){
        let red = 255;
        let green = 255;
        let blue = 255;

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, '#FFFFFF');
    });

    it('should return invalid red', function(){
        let red = 'red';
        let green = 250;
        let blue = 250;

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, undefined);
    });

    it('should return invalid red', function(){
        let red = -250;
        let green = 250;
        let blue = 250;

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, undefined);
    });

    it('should return invalid red', function(){
        let red = 256;
        let green = 250;
        let blue = 250;

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, undefined);
    });

    it('should return invalid green', function(){
        let red = 250;
        let green = 'green';
        let blue = 250;

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, undefined);
    });

    it('should return invalid green', function(){
        let red = 250;
        let green = -250;
        let blue = 250;

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, undefined);
    });

    it('should return invalid green', function(){
        let red = 250;
        let green = 256;
        let blue = 250;

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, undefined);
    });

    it('should return invalid blue', function(){
        let red = 250;
        let green = 250;
        let blue = 'blue';

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, undefined);
    });

    it('should return invalid blue', function(){
        let red = 250;
        let green = 250;
        let blue = -250;

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, undefined);
    });

    it('should return invalid blue', function(){
        let red = 250;
        let green = 256;
        let blue = -256;

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, undefined);
    });
});