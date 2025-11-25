/**
 * 383. 赎金信
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
如果可以，返回 true ；否则返回 false 。
magazine 中的每个字符只能在 ransomNote 中使用一次。
示例 1：
输入：ransomNote = "a", magazine = "b"
输出：false
示例 2：
输入：ransomNote = "aa", magazine = "ab"
输出：false
示例 3：
输入：ransomNote = "aa", magazine = "aab"
输出：true
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/**
 * 正确
 * 思路：把两个字符串转化为对象，然后对比对象的值
 */
var canConstruct = function (ransomNote, magazine) {
    const obj1 = {};
    const obj2 = {};
    for (let i = 0; i < ransomNote.length; i++) {
        obj1[ransomNote[i]] = obj1[ransomNote[i]] ? obj1[ransomNote[i]] + 1 : 1;
    }
    for (let i = 0; i < magazine.length; i++) {
        obj2[magazine[i]] = obj2[magazine[i]] ? obj2[magazine[i]] + 1 : 1;
    }
    for (let k1 in obj1) {
        if (!obj2[k1] || obj2[k1] < obj1[k1]) {
            return false;
        }
    }
    return true;
};

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
