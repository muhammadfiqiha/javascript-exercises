const repeatString = function(str, number) {
    let repeatedString = '';

    for (let i = 0; i < number; i++){
        repeatedString = repeatedString + str;
    }

    repeatedString = number === 0 ? '' : repeatedString;

    return number < 0 ? 'ERROR' : repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
