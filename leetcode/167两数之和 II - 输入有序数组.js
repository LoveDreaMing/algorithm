/**
 * 167. 两数之和 II - 输入有序数组
 * 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。
 * 如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。
以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。
你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
你所设计的解决方案必须只使用常量级的额外空间。
示例 1：
输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
示例 2：
输入：numbers = [2,3,4], target = 6
输出：[1,3]
解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
示例 3：
输入：numbers = [-1,0], target = -1
输出：[1,2]
解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
提示：
2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers 按 非递减顺序 排列
-1000 <= target <= 1000
仅存在一个有效答案
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/**
 * 正确，但不符合题解，必须只使用常量级的额外空间
 * 思路：使用map结构，将numbers一个一个的插入，
 * 返回差值的key的值，及当前索引+1
 */
// var twoSum = function (numbers, target) {
//     const map = new Map();
//     for (let i = 0; i < numbers.length; i++) {
//         const dis = target - numbers[i];
//         if (map.has(dis)) {
//             return [map.get(dis), i + 1];
//         }
//         map.set(numbers[i], i + 1);
//     }
// };

/**
 * 超时
 * 思路：定义一个起点start和终点end，
 * 只要start小于numbers.length - 1就始终进入循环，
 * 在循环里判断只要numbers[start] + numbers[end] === target就直接返回[start + 1, end + 1]，
 * 然后当end等于numbers.length - 1，说明到尾部，就把start++，end等于start + 1，
 * 否则就只把end++
 */
// var twoSum = function (numbers, target) {
//     let start = 0,
//         end = 1;
//     while (start < numbers.length - 1) {
//         if (numbers[start] + numbers[end] === target) {
//             return [start + 1, end + 1];
//         }
//         if (end === numbers.length - 1) {
//             start++;
//             end = start + 1;
//         } else {
//             end++;
//         }
//     }
// };

/**
 * 正确
 * 思路：numbers是非递减顺序排列，
 * 定义左边界索引left和右边界right，
 * 只要left < right就进入循环，
 * 获取numbers[left] + numbers[right]的和sum，
 * 当sum等于target时，直接返回[left + 1, right + 1]，
 * 当sum大于target时，right--往左移，
 * 当sum小于target时，left++往右移
 */
var twoSum = function (numbers, target) {
    let left = 0,
        right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [ 1, 2 ]
console.log(twoSum([2, 3, 4], 6)); // [ 1, 3 ]
console.log(twoSum([-1, 0], -1)); // [ 1, 2 ]
