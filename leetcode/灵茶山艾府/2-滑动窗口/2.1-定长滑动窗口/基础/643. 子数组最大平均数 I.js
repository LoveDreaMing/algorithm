/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let res = -Infinity, // 所有窗口和的最大值
    sum = 0; // 当前窗口和
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const left = i - k + 1;
    if (left < 0) continue;
    res = Math.max(res, sum);
    sum -= nums[left];
  }
  return res / k;
};

var findMaxAverage = function (nums, k) {
  let res = -Infinity, // 所有窗口和的最大值
    sum = 0; // 当前窗口和
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i >= k - 1) {
      res = Math.max(res, sum);
      sum -= nums[i - k + 1];
    }
  }
  return res / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5
