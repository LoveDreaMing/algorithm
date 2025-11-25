/**
 * 76. 最小覆盖子串
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
注意：
对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。
示例 1：
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
示例 2：
输入：s = "a", t = "a"
输出："a"
解释：整个字符串 s 是最小覆盖子串。
示例 3:
输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。
提示：
m == s.length
n == t.length
1 <= m, n <= 105
s 和 t 由英文字母组成
进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const map = new Map();
    for (let i = 0; i < t.length; i++) {
        map.set(t[i], map.get(t[i]) || 0 + 1);
    }
    let left = 0;
    let right = 0;
    let minLen = Number.MAX_SAFE_INTEGER;
    let minStart = 0;
    let count = t.length;
    while (right < s.length) {
        if (map.get(s[right]) > 0) {
            count--;
        }
        map.set(s[right], map.get(s[right]) - 1);
        right++;
        while (count === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minStart = left;
            }
            if (map.get(s[left]) >= 0) {
                count++;
            }
            map.set(s[left], map.get(s[left]) + 1);
            left++;
        }
    }
    return minLen === Number.MAX_SAFE_INTEGER ? "" : s.slice(minStart, minStart + minLen);
};

console.log(minWindow('ADOBECODEBANC', 'ABC')); // BANC
console.log(minWindow('a', 'a')); // a
console.log(minWindow('a', 'aa')); // ''
console.log(minWindow('aa', 'aa'));
