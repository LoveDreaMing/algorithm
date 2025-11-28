/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let res = Infinity,
    count = 0;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === 'W') {
      count++;
    }
    if (i >= k - 1) {
      res = Math.min(res, count);
      const left = i - k + 1;
      if (blocks[left] === 'W') {
        count--;
      }
    }
  }
  return res;
};

console.log(minimumRecolors('WBBWWBBWBW', 7)); // 3
console.log(minimumRecolors('WBWBBBW', 2)); // 0
