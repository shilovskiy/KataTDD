/**
 * Created by Олег Шиловский on 17.01.2017.
 */


class Calculator {
    constructor() {
        this.defaultValue = 0;
    }

    calculateSumm(str) {
        var digits = str.split(',');
        return digits.reduce((total, d) => {
            return parseInt(total) + parseInt(d);
        });
    }

    summ(str) {
        var result;


        if (str.length == 1) {
            result = parseInt(str);

        } else {
            if (str.indexOf(',') > 0) {
                result = this.calculateSumm(str);
            } else {
                result = this.defaultValue
            }
        }
        return result;
    }
}

module.exports = Calculator;