const palindromes = function (str) {
  str = str.replaceAll(/[ !,\.]/g, '').toLowerCase();
  let reverseStr = Array.prototype.toReversed.call(str).join('');
  if (reverseStr === str)
    return true;
  else
    return false;
};

// Do not edit below this line
module.exports = palindromes;
