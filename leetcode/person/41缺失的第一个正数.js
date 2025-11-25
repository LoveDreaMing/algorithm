/**
 * 41. 缺失的第一个正数
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
示例 1：
输入：nums = [1,2,0]
输出：3
解释：范围 [1,2] 中的数字都在数组中。
示例 2：
输入：nums = [3,4,-1,1]
输出：2
解释：1 在数组中，但 2 没有。
示例 3：
输入：nums = [7,8,9,11,12]
输出：1
解释：最小的正数 1 没有出现。
提示：
1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 超时
 * 思路：获取数组中最大值max，
 * 如果max小于1，则直接返回1，
 * 否则从1开始到max开始遍历，如果其中i没有在nums里，则直接返回i，
 * 如果遍历到最后i === max了，则返回max+1
 */
// var firstMissingPositive = function (nums) {
//     const max = Math.max(...nums);
//     if (max < 1) {
//         return 1;
//     }
//     for (let i = 1; i <= max; i++) {
//         if (!nums.includes(i)) {
//             return i;
//         }
//         if (i === max) {
//             return max + 1;
//         }
//     }
// };

/**
 * 正确
 * 思路：遍历所有数字，因为索引是从0开始的，将数字转化为索引位置需要使用num - 1，所以判断nums[num - 1]是否等于undefined，
 * 不能直接使用if (nums[num - 1])，因为有值为0的数字，把所有数字对应的位置使用+=改成字符串，不能直接使用 ='' 赋值语句，防止影响循环
 * 再次遍历nums，当typeof nums[i] 等于 number，说明不存在当前位置对应的数字，就返回索引位置i + 1，
 * 如果遍历结束都没有，则直接返回nums长度+1
 */
var firstMissingPositive = function (nums) {
    for (let num of nums) {
        if (typeof nums[num - 1] !== 'undefined') {
            nums[num - 1] += '';
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] === 'number') {
            return i + 1;
        }
    }
    return nums.length + 1;
};

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
console.log(firstMissingPositive([0])); // 1
