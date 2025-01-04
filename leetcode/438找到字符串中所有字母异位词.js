/**
 * 438. 找到字符串中所有字母异位词
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 示例 1:
输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
示例 2:
输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
提示:
1 <= s.length, p.length <= 3 * 104
s 和 p 仅包含小写字母
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

/**
 * 正确
 * 思路：不太理解。。。
*/
var findAnagrams = function (s, p) {
    const result = [];
    const arr = new Array(26).fill(0); // 用于存储字母出现的频率，'abc'时arr=[ 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    for (let item of p) {
        arr[item.charCodeAt() - 'a'.charCodeAt()]++;
    }
    let left = 0; // 左边届
    for (let i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt() - 'a'.charCodeAt()]--;
        console.log('前', s[i], left, arr);
        while (arr[s[i].charCodeAt() - 'a'.charCodeAt()] < 0) {
            arr[s[left].charCodeAt() - 'a'.charCodeAt()]++;
            left++;
        }
        console.log('后', s[i], left, arr);
        if (i - left + 1 === p.length) {
            result.push(left);
        }
    }
    return result;
};

console.log(findAnagrams('cbaebabacd', 'abc')); // [ 0, 6 ]
console.log(findAnagrams('abab', 'ab')); // [ 0, 1, 2 ]
