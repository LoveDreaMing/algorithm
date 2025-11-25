/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const arr = [];
  for (let i = k - 1; i >= 0; i--) {
    arr.push(cardPoints[i]);
  }
  const len = cardPoints.length;
  for (let i = len - 1; i >= len - k; i--) {
    arr.push(cardPoints[i]);
  }
  let res = 0,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      res = Math.max(res, sum);
      const left = i - k + 1;
      sum -= arr[left];
    }
  }
  return res;
};

// 转化为寻找cardPoints.length - k的最小和，然后用总和 - 最小和
var maxScore = function (cardPoints, k) {
  const total = cardPoints.reduce((a, b) => a + b, 0);
  const len = cardPoints.length;
  if (k >= len) {
    return total;
  } else {
    const newK = len - k;
    let sum = 0;
    let minSum = Infinity;
    for (let i = 0; i < len; i++) {
      sum += cardPoints[i];
      if (i >= newK - 1) {
        minSum = Math.min(minSum, sum);
        sum -= cardPoints[i - newK + 1];
      }
    }
    return total - minSum;
  }
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3)); // 12
console.log(maxScore([2, 2, 2], 2)); // 4
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7)); // 55
console.log(maxScore([1, 1000, 1], 1)); // 1
console.log(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3)); // 202
