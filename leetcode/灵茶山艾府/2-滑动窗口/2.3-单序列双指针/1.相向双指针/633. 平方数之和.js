/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let left = 0,
    right = c;
  while (left <= right) {
    const l = left * left;
    const r = right * right;
    if (l + r === c) {
      return true;
    } else if (l + r < c) {
      left++;
    } else {
      right--;
    }
  }
  return false;
};

var judgeSquareSum = function (c) {
  let left = 0,
    right = Math.floor(Math.sqrt(c)); // 将c开方然后向下取整，left + right < c的开方，因为left从0开始，所有right最大值就是Math.floor(Math.sqrt(c))
  while (left <= right) {
    const sum = left * left + right * right;
    if (sum === c) {
      return true;
    } else if (sum < c) {
      left++;
    } else {
      right--;
    }
  }
  return false;
};

console.log(judgeSquareSum(5)); // true
console.log(judgeSquareSum(3)); // false
console.log(judgeSquareSum(8)); // true
console.log(judgeSquareSum(1)); // true
console.log(judgeSquareSum(999999999)); // false
console.log(judgeSquareSum(9)); // true
