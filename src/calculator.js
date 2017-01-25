/**
 * Created by Олег Шиловский on 17.01.2017.
 */


class Calculator{
    constructor(){
        this.defaultValue = 0;
    }


    summ(str){
        var result;

        if (str.length==1){
            result = parseInt(str);

        }else{
            if (str.indexOf(',')>0){
            var digits = str.split(',');

            result = digits.reduce((total,d)=>{
                return parseInt(total)+parseInt(d);
            });
                //parseInt(parseInt(digits[0])+parseInt(digits[1]));
        }else{
            result = this.defaultValue
        }
        }
        return result;
    }
}

module.exports = Calculator;