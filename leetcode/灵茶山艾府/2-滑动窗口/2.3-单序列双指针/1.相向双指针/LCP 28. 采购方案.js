/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var purchasePlans = function (nums, target) {
  nums.sort((a, b) => a - b);
  const MOD = 1_000_000_007;
  let res = 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] <= target) {
      res = (res + right - left) % MOD;
      left++;
    } else {
      right--;
    }
  }
  return res;
};

console.log(purchasePlans([2, 5, 3, 5], 6)); // 1
console.log(purchasePlans([2, 2, 1, 9], 10)); // 4
