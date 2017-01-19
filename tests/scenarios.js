'use strict';

var Calculator= require('../src/calculator');


describe('my tests for kata calculator',()=>{
    it('should return 0 for empty string', function () {
        let myCalculator = new Calculator();
        let summ = myCalculator.summ('');

        expect(summ).toMatch('0');


    });

    });