/**
 * 55. 跳跃游戏
 * 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
示例 1：
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
示例 2：
输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
*/

/**
 * 超时
 * 思路：先判断nums是否是[0]，也需要返回true
 * 然后从倒数第二个索性向前遍历，如果当前节点能够走的步数大于等于终点索引减去当前索引，就把当前索引位置当成终点继续往前走
 * 能走到第一个节点就返回true
 * 直到遍历完成没有返回true，就返回false
*/
// var canJump = function (nums) {
//     if (nums.length <= 1) return true;
//     const lastIndex = nums.length - 1;
//     for (let i = lastIndex - 1; i >= 0; i--) {
//         if (nums[i] >= lastIndex - i) {
//             if (i === 0) {
//                 return true;
//             }
//             return canJump(nums.slice(0, i + 1));
//         }
//     }
//     return false;
// };

/**
 * 正确
 * 思路：先标注终点的索引位置，如果终点的位置小于等于 0，则说明能走通，
 * 然后从终点的前一步开始向前遍历，能够满足当前节点能走的步数大于等于终点索引减去当前索引，就把当前索引位置当成终点继续往前走，
 * 直到遍历完成没有返回true，就返回false
*/
// var canJump = function (nums) {
//     const end = nums.length - 1;
//     function backJump(nums, end) {
//         if (end <= 0) return true;
//         for (let i = end - 1; i >= 0; i--) {
//             if (nums[i] >= end - i) {
//                 return backJump(nums, i);
//             }
//         }
//         return false;
//     }
//     return backJump(nums, end);
// };

/**
 * 正确
 * 思路：如果nums长度小于1，直接返回true
 * 然后定义一个farthest变量，用来记录当前可达的最远位置，如果当前位置所能覆盖的最远位置大于等于终点，则返回true
 * 否则就继续遍历更新最远覆盖位置
*/
var canJump = function (nums) {
    if (nums.length <= 1) return true;
    const end = nums.length - 1;
    let farthest = 0; // 最远覆盖位置
    for (let i = 0; i < end; i++) {
        if (i <= farthest) {
            farthest = Math.max(farthest, i + nums[i]);
            if (farthest >= end) {
                return true;
            }
        }
    }
    return false;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // true
