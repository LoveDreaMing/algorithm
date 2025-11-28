/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowel = ['a', 'e', 'i', 'o', 'u']; // 元音
  let res = 0; // 所有窗口最大
  let max = 0; // 当前窗口最大
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (vowel.includes(cur)) {
      max++;
    }
    const left = i - k + 1; // 左边界的索引值
    if (left < 0) continue; // 尚未形成第一个窗口，继续增加值
    res = Math.max(max, res); // 更新答案
    if (res >= k) break; // 元音最大和k相同及跳出循环
    const out = s[left]; // 最左端离开窗口
    if (vowel.includes(out)) {
      max--;
    }
  }
  return res;
};

var maxVowels = function (s, k) {
  let res = 0; // 所有窗口最大
  let max = 0; // 当前窗口最大
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (
      cur === 'a' ||
      cur === 'e' ||
      cur === 'i' ||
      cur === 'o' ||
      cur === 'u'
    ) {
      max++;
    }
    const left = i - k + 1; // 左边界的索引值
    if (left < 0) continue; // 尚未形成第一个窗口，继续增加值
    res = Math.max(max, res); // 更新答案
    if (res >= k) break; // 元音最大和k相同及跳出循环，res最大即为k
    const out = s[left]; // 最左端离开窗口
    if (
      out === 'a' ||
      out === 'e' ||
      out === 'i' ||
      out === 'o' ||
      out === 'u'
    ) {
      max--;
    }
  }
  return res;
};

console.log(maxVowels('abciiidef', 3)); // 3
console.log(maxVowels('aeiou', 2)); // 2
console.log(maxVowels('leetcode', 3)); // 2
console.log(maxVowels('rhythms', 4)); // 0
