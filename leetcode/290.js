/**
 * 290. 单词规律
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。
示例1:
输入: pattern = "abba", s = "dog cat cat dog"
输出: true
示例 2:
输入:pattern = "abba", s = "dog cat cat fish"
输出: false
示例 3:
输入: pattern = "aaaa", s = "dog cat cat dog"
输出: false
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
/**
 * 正确
 * 思路：用一个对象来存储两个字符串的映射关系，然后对比对象的key和value是否一致
 */
var wordPattern = function (pattern, s) {
    const arr = s.split(' ');
    if (pattern.length !== arr.length) return false;
    const obj = {};
    for (let i = 0; i < pattern.length; i++) {
        if (!Object.keys(obj).includes(pattern[i]) && !Object.values(obj).includes(arr[i])) {
            obj[pattern[i]] = arr[i];
        } else {
            if (obj[pattern[i]] !== arr[i]) {
                return false;
            }
        }
    }
    return true;
};

console.log(wordPattern('abba', 'dog cat cat dog')); // true
console.log(wordPattern('abba', 'dog cat cat fish')); // false
console.log(wordPattern('aaaa', 'dog cat cat dog')); // false
console.log(wordPattern('abba', 'dog dog dog dog')); // false
