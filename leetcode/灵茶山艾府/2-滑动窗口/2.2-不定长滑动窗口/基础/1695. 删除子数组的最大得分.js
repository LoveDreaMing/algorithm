/**
 * @param {number[]} nums
 * @return {number}
 */
// 用w数组记录当前窗口的元素，遇到重复就从w数组前面取出一项，直到把cur重复的项取出，因为w.includes(cur)的时间复杂度是O(n)，所有整体的时间复杂度是O(n^2)
var maximumUniqueSubarray = function (nums) {
  let res = 0;
  let sum = 0;
  const w = [];
  for (let right = 0; right < nums.length; right++) {
    const cur = nums[right];
    while (w.includes(cur)) {
      sum -= w.shift();
    }
    w.push(cur);
    sum += cur;
    res = Math.max(res, sum);
  }
  return res;
};

// 换成set用来记录窗口内的元素，因为set.has(cur)的时间复杂度是O(1)，所有整体就变成O(n)
var maximumUniqueSubarray = function (nums) {
  let res = 0;
  let sum = 0;
  const set = new Set();
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    const cur = nums[right];
    while (set.has(cur)) {
      set.delete(nums[left]);
      sum -= nums[left];
      left++;
    }
    set.add(cur);
    sum += cur;
    res = Math.max(res, sum);
  }
  return res;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6])); // 17
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])); // 8
