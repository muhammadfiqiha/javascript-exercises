const convertToCelsius = function(tempInFahrenheit) {
  
  if (typeof(tempInFahrenheit) !== 'number') return 'ERROR';
  
  return Math.round((tempInFahrenheit - 32) * 5/9 * 10)/10;
};

const convertToFahrenheit = function(tempInCelsius) {

  if (typeof(tempInCelsius) !== 'number') return 'ERROR';

  return Math.round(((tempInCelsius * 9/5) + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
