/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 先平方再排序
  return nums.map((item) => item * item).sort((a, b) => a - b);
};

var sortedSquares = function (nums) {
  nums = nums.map((item) => item * item);
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    for (let i = left; i < right; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
    right--;
    for (let i = right; i > left; i--) {
      if (nums[i] < nums[i - 1]) {
        [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]];
      }
    }
    left++;
  }
  return nums;
};

var sortedSquares = function (nums) {
  const len = nums.length;
  let left = 0,
    right = len - 1;
  let pos = len - 1;
  const res = new Array(len);
  while (left <= right) {
    const l = nums[left] * nums[left];
    const r = nums[right] * nums[right];
    if (l > r) {
      res[pos--] = l;
      left++;
    } else {
      res[pos--] = r;
      right--;
    }
  }
  return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [ 0, 1, 9, 16, 100 ]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [ 4, 9, 9, 49, 121 ]
