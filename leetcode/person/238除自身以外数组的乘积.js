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

/**
 * 超时
 * 思路：遍历nums，使用filter过滤掉当前元素形成新的数组，
 * 然后使用reduce计算出排除当前元素的所有数的乘积
 */
// var productExceptSelf = function (nums) {
//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//         const arr = nums.filter((item, index) => index !== i);
//         result[i] = arr.reduce((res, cur) => {
//             return res * cur;
//         }, 1);
//     }
//     return result;
// };

/**
 * 正确
 * 思路：先在结果里放一个1，表示第一个数的前乘积是1，
 * 然后从第一个数开始往后遍历，一次算出每个数的前乘积
 * 再定义一个end=1，表示最后一个数的后乘积是1，
 * 然后从结尾往前遍历更新到索引是0的位置，每个数就等于 前乘积*后乘积，
 * 最后依次更新后乘积nums[i] * end
*/
var productExceptSelf = function (nums) {
    const result = [1];
    // 先把当前项设置成前面所有数的乘积
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    // 再使用end保存当前项后面所有数的乘积，最后当前项就等于 前乘积 * 后乘积
    let end = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * end;
        end = nums[i] * end;
    }
    return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [ 24, 12, 8, 6 ]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [ -0, 0, 9, -0, 0 ]
