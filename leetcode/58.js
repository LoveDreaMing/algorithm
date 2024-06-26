/**
 * 58. 最后一个单词的长度
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
示例 1：
输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为5。
示例 2：
输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为4。
示例 3：
输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为6的“joyboy”。
*/
/**
 * 正确
 * 思路：从后往前遍历字符串，从第一个不是空格的字符开始计数，直到遇到空格停止
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0;
    let start = false; // 是否已经开始计数标识
    for (let i = s.length - 1; i >= 0; i--) {
        if (/\s/.test(s[i])) {
            if (start) break;
        } else {
            start = true;
            count++;
        }
    }
    return count;
};

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); // 4
console.log(lengthOfLastWord('luffy is still joyboy')); // 6
