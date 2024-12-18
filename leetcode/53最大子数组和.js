/**
 * 53. 最大子数组和
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组是数组中的一个连续部分。
示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：
输入：nums = [1]
输出：1
示例 3：
输入：nums = [5,4,-1,7,8]
输出：23
*/
/**
 * 正确
 * 思路：如果nuls不存在直接返回0；
 * 默认设置最大值等于第一个数，从起点一次往后相加的和sum也等于第一个数，默认设置终点的索引=1；
 * 如果end小于数组长度，则继续往后遍历
 * 如果前面所有的和sum小于下一个数next，则sum设置成next，从这个节点重新往后相加
 * 最后每遍历相加一个数，sum和max都要比较一下，取最大值
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (!nums.length) return 0;
    let max = nums[0];
    let sum = nums[0];
    let end = 1;
    while (end < nums.length) {
        const next = nums[end];
        sum += next;
        if (next > sum) {
            sum = next;
        }
        max = Math.max(max, sum);
        end++;
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([8, -19, 5, -4, 20])); // 21
