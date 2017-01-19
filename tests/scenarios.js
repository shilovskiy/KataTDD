'use strict';

var Calculator= require('../src/calculator');
let assert = require('chai').assert;


describe('my tests for kata calculator',()=>{

    it('should return 0 for empty string', function () {
        var myCalculator = new Calculator();
        let summ = myCalculator.summ('');
        expect(summ).toMatch('0');
    });


    it('it should return number if in string only 1 lenght number', function () {
        var myCalculator = new Calculator();
        let summ = myCalculator.summ('3');
        assert.equal(summ,3);
    });

    it('it should return summ if in string contain comma separated values', function () {
        var myCalculator = new Calculator();
        let summ = myCalculator.summ('3,5');
        assert.equal(summ,8);
    });



    });