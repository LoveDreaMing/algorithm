/**
 * 136. 只出现一次的数字
 * 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
示例 1 ：
输入：nums = [2,2,1]
输出：1
示例 2 ：
输入：nums = [4,1,2,1,2]
输出：4
示例 3 ：
输入：nums = [1]
输出：1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 正确
 * 思路：如果数组长度为1，直接返回第一项
 * 如果数组长度大于1，遍历数组，判断当前项是否在res中，如果在res中，就在res里删除该项，如果不在res中，就把该项添加到res中
 * 最后返回res的第一项
 */
// var singleNumber = function (nums) {
//     if (nums.length === 1) return nums[0];
//     let res = [];
//     for (let i = 0; i < nums.length; i++) {
//         const idx = res.indexOf(nums[i]);
//         if (idx > -1) {
//             res.splice(idx, 1);
//         } else {
//             res.push(nums[i]);
//         }
//     }
//     return res[0];
// };

/**
 * 正确
 * 思路：思路一致换成map，判断map中是否有该项，如果有就在map中删除该项，如果没有就在map中添加该项
 * 最后返回map的第一项
 */
var singleNumber = function (nums) {
    if (nums.length === 1) return nums[0];
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.delete(nums[i]);
        } else {
            map.set(nums[i], 1);
        }
    }
    return [...map.keys()][0];
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
console.log(singleNumber([1, 0, 1])); // 0
