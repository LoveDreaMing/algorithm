/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let res = 0;
  const map = new Map(); // 记录窗口内所有数字存在的次数
  let sum = 0; // 当前窗口的总和
  let diff = 0; // 不同数字的个数
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    sum += cur;
    map.set(cur, (map.get(cur) || 0) + 1);
    if (map.get(cur) === 1) diff++;
    if (i >= k - 1) {
      if (diff === k) {
        res = Math.max(res, sum);
      }
      const left = nums[i - k + 1];
      sum -= left;
      map.set(left, map.get(left) - 1);
      if (map.get(left) === 0) diff--;
    }
  }
  return res;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)); // 15
console.log(maximumSubarraySum([4, 4, 4], 3)); // 0
