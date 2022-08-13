const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numList) {
	let sum = 0

  for (const num of numList) {
    sum += num
  }
  return sum
};

const multiply = function(numList) {
  product = 1
  for (const num of numList) {
    product *= num
  }
  return product;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
