const convertToCelsius = function(fDeg) {

  fDeg = (fDeg-32)*(5/9);

  if (fDeg===0 || fDeg%1===0) return fDeg;
  return +fDeg.toFixed(1)
};

const convertToFahrenheit = function(cDeg) {

  cDeg = cDeg*(9/5)+32;
  
  if (cDeg===0 || cDeg%1===0) return cDeg;
  return +cDeg.toFixed(1)
};

console.log(convertToCelsius(-10));
console.log(convertToFahrenheit(100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
