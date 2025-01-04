/**
 * 238. 除自身以外数组的乘积
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
请不要使用除法，且在 O(n) 时间复杂度内完成此题。
示例 1:
输入: nums = [1,2,3,4]
输出: [24,12,8,6]
示例 2:
输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
提示：
2 <= nums.length <= 105
-30 <= nums[i] <= 30
保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
进阶：
你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * 超时
 * 思路：遍历nums，截取0到i和i+1到nums.length，拼接成一个新的数组，
 * 然后把数组以*转化为字符串，
 * 然后使用eval函数执行字符串
*/
// var productExceptSelf = function (nums) {
//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//         const arr = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
//         const str = arr.join('*');
//         result[i] = eval(str);
//     }
//     return result;
// };

var productExceptSelf = function (nums) {
    
};

console.log(productExceptSelf([1, 2, 3, 4])); // [ 24, 12, 8, 6 ]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [ -0, 0, 9, -0, 0 ]
