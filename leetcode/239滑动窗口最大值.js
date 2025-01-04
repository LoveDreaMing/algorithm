/**
 * 239. 滑动窗口最大值
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
 * 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
返回 滑动窗口中的最大值 。
示例 1：
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
示例 2：
输入：nums = [1], k = 1
输出：[1]
提示：
1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/**
 * 超时
 * 思路：每次截取从i到i+k形成新的数组，然后保存其中最大的值
 */
// var maxSlidingWindow = function (nums, k) {
//     const result = [];
//     for (let i = 0; i <= nums.length - k; i++) {
//         result.push(Math.max(...nums.slice(i, i + k)));
//     }
//     return result;
// };

/**
 * 超时
 * 思路：增加一个stack栈，遍历时先把数字入栈，
 * 栈里面的数量超过k时出栈，
 * 然后从遍历到k-1时开始往result添加栈里的最大值
 */
var maxSlidingWindow = function (nums, k) {
    // const result = [];
    // const stack = [];
    // for (let [index, key] of nums.entries()) {
    //     // 入栈
    //     stack.push(key);
    //     // 出栈
    //     if (stack.length > k) {
    //         stack.shift();
    //     }
    //     if (index >= k - 1) {
    //         result.push(Math.max(...stack));
    //     }
    // }
    // return result;
};

/**
 * 正确
 * 思路：也是使用栈stack，用来保存当前窗口的最大值的索引，
 * 在循环遍历时，如果当前值大于等于栈顶的值，那么就出栈,
 * 如果当前值小于栈顶的值，那么就入栈,
 * 始终保持第一个数字是当前窗口的最大值
 * 最后从遍历到k-1时开始往result添加栈里的最大值
 */
var maxSlidingWindow = function (nums, k) {
    const result = [];
    const stack = [];
    for (let i = 0; i < nums.length; i++) {
        // 入栈前，把栈顶小于等于当前值的值出栈
        while (stack.length > 0 && nums[i] >= nums[stack.at(-1)]) {
            stack.pop();
        }
        stack.push(i);
        // 如果栈里保存的第一个数的索引和当前值的索引差值大于等于k，那么就从前面移除一位
        if (i - stack[0] >= k) {
            stack.shift();
        }
        // 如果当前值的索引大于等于k-1，那么就把当前值添加到result
        if (i >= k - 1) {
            result.push(nums[stack[0]]);
        }
    }
    return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [ 3, 3, 5, 5, 6, 7 ]
console.log(maxSlidingWindow([1], 1)); // [ 1 ]
