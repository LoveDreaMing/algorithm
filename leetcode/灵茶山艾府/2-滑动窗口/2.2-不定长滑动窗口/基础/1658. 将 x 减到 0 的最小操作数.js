/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

// 转化为寻找和等于total - x的最长子数组，注意 if (total === x) return nums.length; 否则sum永远不可能等于0，则会返回-1
var minOperations = function (nums, x) {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total === x) return nums.length;
  let res = 0;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > total - x) {
      sum -= nums[left++];
    }
    if (sum === total - x) {
      res = Math.max(res, right - left + 1);
    }
  }
  return res > 0 ? nums.length - res : -1;
};

console.log(minOperations([1, 1, 4, 2, 3], 5)); // 2
console.log(minOperations([5, 6, 7, 8, 9], 4)); // -1
console.log(minOperations([3, 2, 20, 1, 1, 3], 10)); // 5
console.log(
  minOperations(
    [
      8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993,
      9904, 8819, 1231, 6309
    ],
    134365
  )
); // 16
