/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return right - left + 1;
    } else {
      const cur = s[left];
      while (cur === s[left]) {
        left++;
      }
      while (cur === s[right]) {
        right--;
      }
    }
  }
  return left === right ? 1 : 0;
};

console.log(minimumLength('ca')); // 2
console.log(minimumLength('cabaabac')); // 0
console.log(minimumLength('aabccabba')); // 3
console.log(minimumLength('aabaaa')); // 1
