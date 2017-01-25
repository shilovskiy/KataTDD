class Calculator {
    constructor() {
        this.defaultValue = 0;
    }

    hasSeparator(str, separator) {
        if (separator.length <= 1) {
            return true;
        } else {
            let hasSeparatorInString = false;
            let seps = separator.split('|');
            for (var i = 0; i < seps.length; i++) {
                hasSeparatorInString = (separator.indexOf(seps[i]) > 0);
            }

            return hasSeparatorInString;
        }

    }

    calculateSumm(str, separator) {
        var digits = str.split(new RegExp(separator));
        console.log(digits);
        return digits.reduce((total, d) => {
            return parseInt(total) + parseInt(d);
        });
    }

    summ(str, separator) {
        var result;


        if (str.length == 1) {
            result = parseInt(str);

        }
        if (str.length == 0) {
            result = this.defaultValue;
        }

        else {
            if (this.hasSeparator(str, separator)) {
                result = this.calculateSumm(str, separator);
            } else {
                result = this.defaultValue
            }
        }
        return result;
    }
}

module.exports = Calculator;