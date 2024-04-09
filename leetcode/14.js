/**
 * 14. 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
*/
/**
 * 正确
 * 思路：默认公共前缀是空，遍历数组中的第一个字符串，判断每个字符串的开头是否是公共前缀依次拼接第一个字符串的内容，直到不匹配为止，后续的字符串直接跳过
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prev = '';
    for (let i = 0; i < strs[0].length; i++) {
        if (strs.every(item => item.indexOf(prev + strs[0][i]) === 0)) {
            prev += strs[0][i];
        } else {
            break;
        }
    }
    return prev;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
console.log(longestCommonPrefix(['a'])); // 'a'
