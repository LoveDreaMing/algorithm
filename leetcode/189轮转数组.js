/**
 * 189. 轮转数组
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
示例 1:
输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
示例 2:
输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释:
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]
提示：
1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
进阶：
尽可能想出更多的解决方案，至少有 三种 不同的方法可以解决这个问题。
你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
*/

/**
 * 超时
 * 思路：首先判断数组不存在，返回空数组，
 * 遍历数组，将数组中的元素向右轮转k次，然后返回数组
 */
var rotate = function (nums, k) {
    if (!nums.length) return [];
    k = k % nums.length;
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
};

/**
 * 正确
 * 思路：首先判断数组不存在，返回空数组，
 * 从右侧截取数组k个，拼接到数组的前面
 */
// var rotate = function (nums, k) {
//     if (!nums.length) return [];
//     nums.unshift(...nums.splice(-k % nums.length));
//     return nums;
// };

/**
 * 正确
 * 思路：首先把k通过nums.length取余，防止轮转次数超过nums.length，
 * 然后自定义反转数组的方法，
 * 首先先从索引0到length-1反转数组，
 * 再把从索引0到k-1反转数组，
 * 最后反转从索引k到length-1
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    const reverse = (i, j) => {
        while (i < j) {
            [nums[i++], nums[j--]] = [nums[j], nums[i]];
        }
    };
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
    return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
console.log(rotate([-1, -100, 3, 99], 2)); // [ 3, 99, -1, -100 ]
