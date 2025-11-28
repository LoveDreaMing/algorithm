/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
  const len = nums.length;
  const res = new Array(len).fill(-1);
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (i >= 2 * k) {
      res[i - k] = Math.trunc(sum / (2 * k + 1));
      sum -= nums[i - 2 * k];
    }
  }
  return res;
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
console.log(getAverages([100000], 0));
console.log(getAverages([8], 100000));
