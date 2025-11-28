/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
// 判断剩余可花费的预算是否够继续前进，不够的话就移动左边界，且把已花费的部分补充进去
var equalSubstring = function (s, t, maxCost) {
  let res = 0;
  let left = 0;
  for (let right = 0; right < t.length; right++) {
    const diff = Math.abs(s[right].charCodeAt() - t[right].charCodeAt());
    while (diff > maxCost) {
      maxCost += Math.abs(s[left].charCodeAt() - t[left].charCodeAt());
      left++;
    }
    maxCost -= diff;
    if (maxCost >= 0) {
      res = Math.max(res, right - left + 1);
    }
  }
  return res;
};

// 新增一个变量判断当前窗口花费
var equalSubstring = function (s, t, maxCost) {
  let res = 0;
  let left = 0;
  let cost = 0;
  for (let right = 0; right < t.length; right++) {
    cost += Math.abs(s[right].charCodeAt() - t[right].charCodeAt());
    while (cost > maxCost) {
      cost -= Math.abs(s[left].charCodeAt() - t[left].charCodeAt());
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

console.log(equalSubstring('abcd', 'bcdf', 3)); // 3
console.log(equalSubstring('abcd', 'cdef', 3)); // 1
console.log(equalSubstring('abcd', 'acde', 0)); // 1
