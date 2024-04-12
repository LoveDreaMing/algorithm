/**
 * 219. 存在重复元素 II
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
示例 1：
输入：nums = [1,2,3,1], k = 3
输出：true
示例 2：
输入：nums = [1,0,1,1], k = 1
输出：true
示例 3：
输入：nums = [1,2,3,1,2,3], k = 2
输出：false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/**
 * 超时
 * 思路：首先判断数组长度小于等于k，直接对数组进行去重，如果去重后的长度小于数组长度，返回true，否则返回false；
 * 如果数组长度大于k，遍历数组到nums.length-k的位置，然后对数组进行去重，如果去重后的长度小于k + 1，返回true，
 * 如果遍历结束都没有返回true，最后返回false
 */
// var containsNearbyDuplicate = function (nums, k) {
//     if (nums.length <= k) {
//         return new Set(nums).size < nums.length;
//     }
//     for (let i = 0; i < nums.length - k; i++) {
//         const size = new Set(nums.slice(i, i + k + 1)).size;
//         if (size < k + 1) {
//             return true;
//         }
//     }
//     return false;
// };
/**
 * 正确
 * 思路：利用map，key为数组的值，value为数组中的下标，
 * 然后遍历数组，判断key是否在map中，如果在，判断下标和map中的下标的差值小于等于k，则返回true；
 * 如果大于k，把最新的下标更新到value中
 */
var containsNearbyDuplicate = function (nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const prev = map.get(nums[i]);
            if (i - prev <= k) {
                return true;
            } else {
                map.set(nums[i], i);
            }
        } else {
            map.set(nums[i], i);
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
console.log(containsNearbyDuplicate([99, 99], 2)); // true
