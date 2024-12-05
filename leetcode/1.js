/**
 * 1. 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：
输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 正确
 * 思路：遍历数组，从当前索引往后截取数组形成新数组，判断新数组中target - nums[i]的位置，在加上原索引i+1
 * 时间复杂度为O(n^2)
 */
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         const newArr = nums.slice(i + 1);
//         const idx = newArr.indexOf(target - nums[i]);
//         if (idx > -1) {
//             return [i, idx + i + 1];
//         }
//     }
// };

/**
 * 正确
 * 思路：双循环
 * 时间复杂度为O(n^2)
 */
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

/**
 * 正确
 * 思路：循环遍历判断差值的位置以及不等于当前位置
 * 时间复杂度为O(n^2)
 */
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         const idx = nums.indexOf(target - nums[i]);
//         if (idx > -1 && i !== idx) {
//             return [i, idx];
//         }
//     }
// };

/**
 * 正确
 * 思路：使用map结构，一个数一个数插入，
 * 如果碰到target - nums[i]，直接返回[已经插入的数的下标，当前数的下标]
 * 甚至都不需要遍历走完
 * 时间复杂度为O(n)
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
