/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const set = new Set();
  const res = [];
  for (let i = 0; i < len; i++) {
    let left = i + 1,
      right = len - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        const str = JSON.stringify([nums[i], nums[left], nums[right]]);
        if (!set.has(str)) {
          set.add(str);
          res.push([nums[i], nums[left], nums[right]]);
        }
        set.add();
        left++;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const res = [];
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 跳过重复的第一个数
    let left = i + 1,
      right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [ [ 0, 0, 0 ] ]
