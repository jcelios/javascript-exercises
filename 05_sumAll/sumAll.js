const sumAll = function (a, b) {
  let c = 0;
  if (a > 0 && Number.isInteger(a) && typeof b === "number") {
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      c += i;
    }
    return c;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
