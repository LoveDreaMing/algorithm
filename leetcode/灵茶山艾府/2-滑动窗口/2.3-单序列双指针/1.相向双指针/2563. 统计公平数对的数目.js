/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) { // 使用countPairs计算出小于等于upper的公平数和小于等于lower - 1的公平数，再计算差值即可得到 大于等于lower 和 小于等于upper的区间
  nums.sort((a, b) => a - b);
  function countPairs(arr, target) {
    let res = 0;
    let left = 0,
      right = arr.length - 1;
    while (left < right) {
      if (arr[left] + arr[right] <= target) {
        res += right - left;
        left++;
      } else {
        right--;
      }
    }
    return res;
  }
  return countPairs(nums, upper) - countPairs(nums, lower - 1);
};

console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6)); // 6
console.log(countFairPairs([1, 7, 9, 2, 5], 11, 11)); // 1
