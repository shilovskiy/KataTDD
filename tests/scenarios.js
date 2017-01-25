'use strict';

const Calculator = require('../src/calculator');
let assert = require('chai').assert;


describe('my tests for kata calculator', () => {

    it('should return 0 for empty string', function () {
        var myCalculator = new Calculator();
        let summ = myCalculator.summ('',',');
        expect(summ).toMatch('0');
    });


    it('it should return number if in string only 1 lenght number', function () {
        var myCalculator = new Calculator();
        let summ = myCalculator.summ('3','');
        assert.equal(summ, 3);
    });

    it('it should return summ of 2 comma separated numbers', function () {
        var myCalculator = new Calculator();
        let summ = myCalculator.summ('3,5',',');
        assert.equal(summ, 8);
    });


    it('it should return summ of any comma separated numbers ', function () {
        let myCalculator = new Calculator();
        let summ = myCalculator.summ('3,5,6,7',',');
        assert.equal(summ, 21);

    });
    it('it should return summ of new line separated numbers ', function () {
        let myCalculator = new Calculator();
        let summ = myCalculator.summ('1\n5\n6\n7','\n');
        assert.equal(summ, 19);

    });

    it('it should return summ of any separator separated numbers ', function () {
        let myCalculator = new Calculator();
        let summ = myCalculator.summ('1\n2,3','\n|,');
        assert.equal(summ, 6);

    });



});