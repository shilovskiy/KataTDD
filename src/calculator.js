/**
 * Created by Олег Шиловский on 17.01.2017.
 */


class Calculator {
    constructor() {
        this.defaultValue = 0;
    }

    calculateSumm(str,separator) {
        var digits = str.split(separator);
        console.log(digits);
        return digits.reduce((total, d) => {
            return parseInt(total) + parseInt(d);
        });
    }

    summ(str,separator) {
        var result;


        if (str.length == 1) {
            result = parseInt(str);

        } else {
            if (str.indexOf(separator) > 0) {
                result = this.calculateSumm(str,separator);
            } else {
                result = this.defaultValue
            }
        }
        return result;
    }
}

module.exports = Calculator;