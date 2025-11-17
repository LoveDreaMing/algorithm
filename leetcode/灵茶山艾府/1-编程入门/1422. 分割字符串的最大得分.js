/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = 0;
  function sum(str, flag) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === flag) {
        count++;
      }
    }
    return count;
  }
  for (let i = 1; i < s.length; i++) {
    const first = s.slice(0, i);
    const second = s.slice(i, s.length);
    max = Math.max(max, sum(first, '0') + sum(second, '1'));
  }
  return max;
};

console.log(maxScore('011101')); // 5
console.log(maxScore('00111')); // 5
console.log(maxScore('1111')); // 3
console.log(maxScore('00')); // 1
