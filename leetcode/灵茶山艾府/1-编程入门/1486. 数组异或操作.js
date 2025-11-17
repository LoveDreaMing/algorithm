/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums[i] = start + 2 * i;
  }
  let reulst = nums[0];
  for (let i = 1; i < n; i++) {
    reulst = reulst ^ nums[i];
  }
  return reulst;
};
