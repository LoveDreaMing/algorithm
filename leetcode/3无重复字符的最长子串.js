/**
 * 3. 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
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
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
提示：
0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
*/

/**
 * 正确
 * 思路：判断小于2时直接返回长度，
 * 然后使用双指针，i为不重复字符串的起点，j为终点
 * 如果s.slice(i, j)中不包含s[j]，那么重点j++，并且更新最大值max
 * 否则起点i++，最后返回max
 */
// var lengthOfLongestSubstring = function (s) {
//     if (s.length < 2) {
//         return s.length || 0;
//     }
//     let i = 0,
//         j = 1,
//         max = 1;
//     while (j < s.length) {
//         if (s.slice(i, j).indexOf(s[j]) === -1) {
//             j++;
//             max = Math.max(max, j - i);
//         } else {
//             i++;
//         }
//     }
//     return max;
// };

/**
 * 正确
 * 思路：使用滑动窗口原理
 * 使用map结构把遍历的值当成key，索引当成value
 * 定义不重复字符串的起点left，最大值max
 * 循环遍历字符串，把s[right]当作key，
 * 判断条件很重要必须是map里已经存在当前key，而且当前key前面一个值的索引刚好大于等于left滑动窗口左边界，才把left左边界往右移动到刚好隐藏前一个重复的key
 * 每一次更新最大值max，当前节点最长子串等于右边界right - 做边界 + 1
 */
var lengthOfLongestSubstring = function (s) {
    const map = new Map();
    let left = 0;
    let max = 0;
    for (let right = 0; right < s.length; right++) {
        const key = s[right];
        if (map.has(key) && map.get(key) >= left) {
            left = map.get(key) + 1;
        }
        map.set(key, right);
        max = Math.max(max, right - left + 1);
    }
    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('')); // 0
console.log(lengthOfLongestSubstring('abcdefghijklmnopqrstuvwxyz')); // 26
console.log(lengthOfLongestSubstring('bb')); // 1
console.log(lengthOfLongestSubstring('abba')); // 2
