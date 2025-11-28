/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let res = 0;
  let left = 0;
  const ww = []; // 窗口
  let zeroCount = 0; // 窗口内0的个数
  for (let right = 0; right < nums.length; right++) {
    const cur = nums[right];
    if (cur === 0) {
      zeroCount++;
    }
    ww.push(cur);
    while (zeroCount > 1) {
      left++;
      const prev = ww.shift();
      if (prev === 0) {
        zeroCount--;
      }
    }
    res = Math.max(res, right - left);
  }
  return res;
};

// 改进版，没必要引入ww窗口数组，只需要统计0的个数即可
var longestSubarray = function (nums) {
  let res = 0;
  let left = 0;
  let zeroCount = 0; // 窗口内0的个数
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;
    while (zeroCount > 1) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    res = Math.max(res, right - left);
  }
  return res;
};

console.log(longestSubarray([1, 1, 0, 1])); // 3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // 5
console.log(longestSubarray([1, 1, 1])); // 2
console.log(longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1])); // 4
