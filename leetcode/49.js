/**
 * 49. 字母异位词分组
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
示例 1:
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:
输入: strs = [""]
输出: [[""]]
示例 3:
输入: strs = ["a"]
输出: [["a"]]
提示：
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/**
 * 超时
 * 思路：把字符串每一项转化为数组，排序后再转成字符串，
 * 判断对象中是否有排序后的key，没有的话以数组的形式添加，已经有的直接push
 * 调用了太多的数组和字符串方法，时间复杂度有点高
 */
// var groupAnagrams = function (strs) {
//     const obj = {};
//     for (let i = 0; i < strs.length; i++) {
//         const item = strs[i].split('').sort().join();
//         if (Object.keys(obj).includes(item)) {
//             obj[item].push(strs[i]);
//         } else {
//             obj[item] = [strs[i]];
//         }
//     }
//     return Object.values(obj);
// };

/**
 * 正确
 * 思路：把字符串每一项转化为数组，排序后再转成字符串，
 * 判断对象中是否有排序后的key，没有的话以数组的形式添加，已经有的直接push
 * 使用obj[item]判断是否存在，减少调用数组方法
 */
// var groupAnagrams = function (strs) {
//     const obj = {};
//     for (let i = 0; i < strs.length; i++) {
//         const item = strs[i].split('').sort().join();
//         if (obj[item]) {
//             obj[item].push(strs[i]);
//         } else {
//             obj[item] = [strs[i]];
//         }
//     }
//     return Object.values(obj);
// };

var groupAnagrams = function (strs) {
    const map = new Map();
    for (const str of strs) {
        const key = [...str].sort().join();
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }
    return [...map.values()];
};
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
console.log(groupAnagrams([''])); // [ [ '' ] ]
console.log(groupAnagrams(['a'])); // [ [ 'a' ] ]
