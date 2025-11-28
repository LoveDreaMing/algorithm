/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  let res = 0;
  let left = 0;
  const map = new Map();
  for (let right = 0; right < nums.length; right++) {
    const cur = nums[right];
    map.set(cur, (map.get(cur) || 0) + 1);
    while (map.get(cur) > k) {
      map.set(nums[left], map.get(nums[left]) - 1);
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2)); // 6
console.log(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1)); // 2
console.log(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4)); // 4
