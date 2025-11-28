/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

// 超过时间限制
var maxSum = function (nums, m, k) {
  const win = []; // 窗口
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    win.push(nums[i]);
    if (i >= k - 1) {
      const set = new Set(win);
      if (set.size >= m) {
        const sum = win.reduce((s, cur) => (s += cur), 0);
        res = Math.max(res, sum);
      }
      win.shift();
    }
  }
  return res;
};

var maxSum = function (nums, m, k) {
  const map = new Map();
  let diffCount = 0; // 不同数字的个数
  let res = 0,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    sum += cur;
    map.set(cur, (map.get(cur) || 0) + 1);
    if (map.get(cur) === 1) diffCount++; // 当数字只出现一次时，diffCount开始计数
    if (i >= k) {
      const left = nums[i - k];
      sum -= left;
      map.set(left, map.get(left) - 1);
      if (map.get(left) === 0) diffCount--;
    }
    if (i >= k - 1) {
      if (diffCount >= m) {
        res = Math.max(res, sum);
      }
    }
  }
  return res;
};

var maxSum = function (nums, m, k) {
  const map = new Map();
  let diffCount = 0; // 不同数字的个数
  let res = 0,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    sum += cur;
    map.set(cur, (map.get(cur) || 0) + 1);
    if (map.get(cur) === 1) diffCount++; // 当数字只出现一次时，diffCount开始计数
    if (i >= k - 1) {
      if (diffCount >= m) {
        res = Math.max(res, sum);
      }
      const left = nums[i - k + 1];
      sum -= left;
      map.set(left, map.get(left) - 1);
      if (map.get(left) === 0) diffCount--;
    }
  }
  return res;
};

console.log(maxSum([2, 6, 7, 3, 1, 7], 3, 4)); // 18
console.log(maxSum([5, 9, 9, 2, 4, 5, 4], 1, 3)); // 23
console.log(maxSum([1, 2, 1, 2, 1, 2, 1], 3, 3)); // 0
