const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length == 0) return 0;
  else return arr.reduce((total, x) => total + x);
};

const multiply = function (arr) {
  if (arr.length == 0) return 1;
  else return arr.reduce((total, x) => total * x);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (x) {
  if (x == 0) return 1;
  else {
    let i = x - 1;
    let y = x;
    while (i != 0) {
      y = y*i;
      i--;
    }
    return y;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
