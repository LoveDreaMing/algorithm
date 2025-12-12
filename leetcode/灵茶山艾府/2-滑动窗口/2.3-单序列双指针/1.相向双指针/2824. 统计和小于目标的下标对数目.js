/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  // 暴力解法
  let res = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] < target) {
        res++;
      }
    }
  }
  return res;
};

var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      res += right - left; // 排序后，nums[left] + nums[right]符合的时候，nums[left]加上中间所有的值都符合
      left++;
    } else {
      right--;
    }
  }
  return res;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2)); // 3
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2)); // 10
