/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  if (n / 2 === Math.floor(n / 2)) {
    return n;
  }
  return n * 2;
};
