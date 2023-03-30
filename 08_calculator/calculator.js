const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let everything=0;
  for (let i=0; i<=arr.length-1; i++) {
    everything+=arr[i];
  }
  return everything;
};

const multiply = function(arr) {
  let everything = 1;
  for (let i = 0; i<= arr.length-1;i++) {
    everything*=arr[i];
  }
  return everything;
};

const power = function(a,b) {
  let powerA = a;
	for (let i = 1; i<b;i++) {
    a*=powerA;
  };
  return a;
};

const factorial = function(a) {
	let fact = 1;
  for (let i = 1; i<=a; i++) {
    fact*=i;
  }
  return fact;
};

console.log(add(4,5), subtract(10,5), multiply(6,3,2,1), power(3,3), factorial(9), sum(4,6,2,5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
