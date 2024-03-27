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
*/

// 超时写法
var rotate = function (nums, k) {
    if (!nums.length) return [];
    k = k % nums.length;
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
};

// 正确写法
var rotate = function (nums, k) {
    if (!nums.length) return [];
    nums.unshift(...nums.splice(-k % nums.length));
    return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
console.log(rotate([-1, -100, 3, 99], 2)); // [ 3, 99, -1, -100 ]
