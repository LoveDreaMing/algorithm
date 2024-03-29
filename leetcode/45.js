/**
 * 45. 跳跃游戏 II
 * 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
0 <= j <= nums[i]
i + j < n
返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
示例 1:
输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
    从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
示例 2:
输入: nums = [2,3,0,1,4]
输出: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 正确
 * 思路：如果nums长度小于等于1，说明最小只需要0步，
 * 然后遍历每个节点的最大覆盖范围，如果当前节点能覆盖到终点就返回步数，
 * 如果不能覆盖到终点就step+1，到达下一个节点，再判断当前节点的最大覆盖范围是否能到达终点
*/
var jump = function (nums) {
    if (nums.length <= 1) return 0;
    const end = nums.length - 1;
    let farthest = 0; // 最远下标索引
    let maximum = 0; // 最大覆盖范围到达的索引
    let step = 0; // 当前步数
    for (let i = 0; i < end; i++) {
        maximum = Math.max(maximum, i + nums[i]);
        if (i === farthest) {
            farthest = maximum;
            step++;
            if (maximum >= end) {
                break;
            }
        }
    }
    return step;
};

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
