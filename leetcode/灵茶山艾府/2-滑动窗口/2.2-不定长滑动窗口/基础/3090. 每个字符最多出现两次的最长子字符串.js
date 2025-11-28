/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  let res = 0;
  let left = 0;
  const map = new Map();
  for (let right = 0; right < s.length; right++) {
    const cur = s[right];
    map.set(cur, (map.get(cur) || 0) + 1);
    while (map.get(cur) > 2) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

console.log(maximumLengthSubstring('bcbbbcba')); // 4
console.log(maximumLengthSubstring('aaaa')); // 2
console.log(maximumLengthSubstring('dcfdddccb')); // 5
