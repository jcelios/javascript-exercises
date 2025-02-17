const fibonacci = function (n) {
  let fib = [0, 1, 1];
  if (n < 0) return "OOPS";
  else {
    for (i = 2; i <= n; i++) {
      a = fib[i - 1];
      b = fib[i];
      f = a + b;
      fib.push(f);
    }
    return fib[n];
  }
};

// Do not edit below this line
module.exports = fibonacci;