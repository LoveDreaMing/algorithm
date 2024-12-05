/**
 * 128. 最长连续序列
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
示例 1：
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
示例 2：
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
提示：
0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 正确
 * 思路：用set去重，然后排序
 * 循环遍历，判断前一个值是否存在，并且前一个值等于当前值减一，就把前一个值的value+1，否则把当前值作为key，value为1
 */
// var longestConsecutive = function (nums) {
//     if (!nums.length) return 0;
//     const arr = Array.from(new Set(nums)).sort((a, b) => a - b);
//     const obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i - 1] !== undefined && arr[i - 1] === arr[i] - 1) {
//             obj[arr[i]] = obj[arr[i - 1]] + 1;
//         } else {
//             obj[arr[i]] = 1;
//         }
//     }
//     return Math.max(...Object.values(obj));
// };

/**
 * 正确
 * 思路：先用Set去重
 * 循环遍历去重后的set，判断是否存在比当前值减一的值，如果不存在就把当前值作为起点，
 * 当前值的长度就是1，然后寻找比当前值大于1的值存在就当前值+1，当前值作为起点的长度也+1，
 * 最后更新最大长度
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let max = 0;
    for (let value of set) {
        if (!set.has(value - 1)) {
            let start = value;
            let len = 1;
            while (set.has(start + 1)) {
                start++;
                len++;
            }
            max = Math.max(max, len);
        }
    }
    return max;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([])); // 0
console.log(longestConsecutive([0, 0, -1])); // 2
