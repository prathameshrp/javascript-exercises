const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	 return a-b;
};

const sum = function(arr) {
    return arr.reduce((total, item) => total+item, 0);
};

const multiply = function(arr) {
    return arr.reduce((product, element) => product*element);
};

const power = function(a,b) {
    return a**b;
};

const factorial = function(n) {
  return [...Array(n).keys()]
          .map((e) => e+1)
          .reduce((prod, item) => prod*item, 1);
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
