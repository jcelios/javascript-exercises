const removeFromArray = function (arr, ...args) {
  for (let x of args) {
    if (arr.includes(x)) {
      // arr.splice(arr.indexOf(x), 1);
      arr = arr.filter(y => y !== x);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
