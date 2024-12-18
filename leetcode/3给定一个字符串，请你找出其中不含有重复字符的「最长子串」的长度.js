/**
 * 3.给定一个字符串，请你找出其中不含有重复字符的「最长子串」的长度。
示例 1:
输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:
输入: s = ""
输出: 0
*/

/**
 * 正确
 * 思路：判断小于2时直接返回长度，
 * 然后使用双指针，i为不重复字符串的起点，j为终点
 * 如果s.slice(i, j)中不包含s[j]，那么重点j++，并且更新最大值max
 * 否则起点i++，最后返回max
 */
function maxLength(s) {
    if (s.length < 2) {
        return s.length || 0;
    }
    let i = 0,
        j = 1,
        max = 1;
    while (j < s.length) {
        if (s.slice(i, j).indexOf(s[j]) === -1) {
            j++;
            max = Math.max(max, j - i);
        } else {
            i++;
        }
    }
    return max;
}
console.log(maxLength('abcabcbb')); // 3
console.log(maxLength('bbbbb')); // 1
console.log(maxLength('pwwkew')); // 3
console.log(maxLength('')); // 0
console.log(maxLength('abcdefghijklmnopqrstuvwxyz')); // 26
console.log(maxLength('bb')); // 1
