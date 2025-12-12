/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  nums.sort((a, b) => a - b);
  const mod = 1_000_000_007;
  const len = nums.length;
  let left = 0,
    right = len - 1;
  let res = 0;
  const pow2 = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    pow2[i] = (pow2[i - 1] * 2) % mod;
  }
  while (left <= right) {
    const sum = nums[left] + nums[right];
    if (sum <= target) {
      const n = right - left;
      res = (res + pow2[n]) % mod;
      left++;
    } else {
      right--;
    }
  }
  return res;
};

console.log(numSubseq([3, 5, 6, 7], 9)); // 4
console.log(numSubseq([3, 3, 6, 8], 10)); // 6
console.log(numSubseq([2, 3, 3, 4, 6, 7], 12)); // 61
console.log(
  numSubseq(
    [
      9, 25, 9, 28, 24, 12, 17, 8, 28, 7, 21, 25, 10, 2, 16, 19, 12, 13, 15, 28,
      14, 12, 24, 9, 6, 7, 2, 15, 19, 13, 30, 30, 23, 19, 11, 3, 17, 2, 14, 20,
      22, 30, 12, 1, 11, 2, 2, 20, 20, 27, 15, 9, 10, 4, 12, 30, 13, 5, 2, 11,
      29, 5, 3, 13, 22, 5, 16, 19, 7, 19, 11, 16, 11, 25, 29, 21, 29, 3, 2, 9,
      20, 15, 9
    ],
    32
  )
); // 91931447
