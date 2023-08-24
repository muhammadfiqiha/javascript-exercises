const removeFromArray = function(array, ...removedValue) {
    return array.filter(val => !removedValue.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
