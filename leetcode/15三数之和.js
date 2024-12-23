/**
 * 15. 三数之和
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。
 * 请你返回所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
示例 2：
输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
示例 3：
输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
提示：
3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 正确
 * 思路：参照两数之和算法
 * 先将数组nums进行排序，
 * 从0开始遍历数组，相当于 -nums[i] = num[left] + nums[right]，转化为求从i开始后面所有数的两数之和等于 -nums[i]，
 * 如果nums[i] > 0直接跳出循环，说明本身大于0，后面数字都大于0，
 * 如果nums[i] === nums[i - 1]，说明相同的数字已经算过了，直接跳过，
 * 然后设置起点为left = i + 1，终点为nums.length - 1，
 * 如果三数相加等于0，则将结果push到result里，并且把left++、right--，
 * 防止计算过相同的left值和right值，遇到nums[left] === nums[left + 1]，则left++；遇到nums[right] === nums[right - 1]，则right--；
 * 三数相加大于0，则right--，
 * 否则left++
*/
var threeSum = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) { // 去重值相等的情况
                    left++;
                }
                while (nums[right] === nums[right - 1]) { // 去重值相等的情况
                    right--;
                }
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [ [ 0, 0, 0 ] ]
