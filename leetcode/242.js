/**
 * 242. 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
示例 1:
输入: s = "anagram", t = "nagaram"
输出: true
示例 2:
输入: s = "rat", t = "car"
输出: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * 正确
 * 思路：把两个字符串转化为对象，然后对比对象的key和value是否一致
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const obj1 = {};
    const obj2 = {};
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = obj1[s[i]] ? obj1[s[i]] + 1 : 1;
        obj2[t[i]] = obj2[t[i]] ? obj2[t[i]] + 1 : 1;
    }
    for (let k in obj1) {
        if (obj1[k] !== obj2[k]) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
