const sumAll = function(num1, num2) {

    if (
        (num1 < 0) || 
        (num2 < 0) ||
        (!Number.isInteger(num1)) ||
        (!Number.isInteger(num2))
        ){
        return 'ERROR';
    }

    let resultSum = 0;
    let under, top;

    if(num1 > num2) {
        under = num2;
        top = num1;
    } else {
        under = num1;
        top = num2;
    }

    for (let i = under; i <= top; i++){
        resultSum += i;
    }

    return resultSum;
};

// Do not edit below this line
module.exports = sumAll;
