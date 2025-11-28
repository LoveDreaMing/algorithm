/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 超时：从两端都计数，然后再把左边界回退，造成复杂度上升到O(n^2)
var minRemoval = function (nums, k) {
  nums.sort((a, b) => a - b);
  const total = nums.length - 1;
  let res = total;
  let left = 0;
  for (let right = nums.length - 1; right > 0; right--) {
    let count = total - right;
    if (count >= res) break;
    while (nums[left] * k < nums[right]) {
      left++;
      count++;
    }
    res = Math.min(res, count);
    left = 0;
  }
  return res;
};

// 每一轮都计算出符合条件的窗口长度right - left + 1，再找出最小值len - w
var minRemoval = function (nums, k) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let res = len - 1;
  let left = 0;
  for (let right = 0; right < len; right++) {
    while (nums[left] * k < nums[right]) {
      left++;
    }
    const w = right - left + 1; // 窗口长度
    res = Math.min(res, len - w);
  }
  return res;
};

// 找出符合条件的最长的窗口，然后最少移除就是拿总长度len - res
var minRemoval = function (nums, k) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let res = 0;
  let left = 0;
  for (let right = 0; right < len; right++) {
    while (nums[left] * k < nums[right]) {
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return len - res;
};

console.log(minRemoval([2, 1, 5], 2)); // 1
console.log(minRemoval([1, 6, 2, 9], 3)); // 2
console.log(minRemoval([4, 6], 2)); // 0
