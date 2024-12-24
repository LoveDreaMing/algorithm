/**
 * 283. 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
请注意 ，必须在不复制数组的情况下原地对数组进行操作。
示例 1:
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
示例 2:
输入: nums = [0]
输出: [0]
提示:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
进阶：你能尽量减少完成的操作次数吗？
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 正确
 * 思路：如果nums长度小于2，直接返回nums
 * 建立起始位置和结束位置的双指针，
 * 当start小于end始终在循环里，
 * 如果nums[start]不等于0，就往前进一位
 * 如果nums[end]等于0，就往后退一位
 * 如果nums[start]等于0并且nums[end]不等于0，就把start位置的0删掉，并在end位置补0
 */
// var moveZeroes = function (nums) {
//     const len = nums.length;
//     if (len < 2) return nums;
//     let start = 0,
//         end = len;
//     while (start < end) {
//         if (nums[start] !== 0) {
//             start++;
//         } else if (nums[end] === 0) {
//             end--;
//         } else {
//             nums.splice(start, 1);
//             nums.splice(end, 0, 0);
//             end--;
//         }
//     }
//     return nums;
// };

/**
 * 正确
 * 思路：用一个指针标记需要赋值不等于0位置的索引
 * 循环遍历nums，先把不是0的值，一次往前移
 * 最后再从noZero位置往后补0
 */
// var moveZeroes = function (nums) {
//     let noZero = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[noZero] = nums[i];
//             noZero++;
//         }
//     }
//     for (let i = noZero; i < nums.length; i++) {
//         nums[i] = 0;
//     }
//     return nums;
// };


/**
 * 正确
 * 思路：使用left指针标记第一个0的位置
 * 循环遍历，如果nums[i]不等于0，就把nums[left]和nums[i]交换位置，
 * 然后向右移动left，最后返回nums
*/
// var moveZeroes = function (nums) {
//     let left = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             [nums[left], nums[i]] = [nums[i], nums[left]];
//             left++;
//         }
//     }
//     return nums;
// };

/**
 * 正确
 * 思路：使用数组的sort排序方法，判断b等于0时，把它改为-1就会被自动排序到数组的最后面
 * 如果想要把0全部放到前面可以判断a等于0时改为-1
*/
var moveZeroes = function (nums) {
    nums.sort((a, b) => b === 0 ? -1 : 0);
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [ 1, 3, 12, 0, 0 ]
console.log(moveZeroes([0])); // [ 0 ]
console.log(moveZeroes([1, 2, 3, 1])); // [ 1, 2, 3, 1 ]
console.log(moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0])); // [4, 2, 4, 3, 5, 1, 0, 0, 0, 0]
