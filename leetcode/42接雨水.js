/**
 * 42. 接雨水
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 示例 1：
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
示例 2：
输入：height = [4,2,0,3,2,5]
输出：9
提示：
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/

/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * 正确
 * 思路：得结合图示，
 * 在循环里更新左右最高墙的值，
 * 当左最高小于右最高时，累加上最高墙减去左侧当前值，向右移动左索引
 * 否则累加上最高墙减去右侧当前值，向左移动右索引
 * 最后返回result
 */
var trap = function (height) {
    let left = 0, // 左索引
        right = height.length - 1, // 右索引
        prev = 0, // 左最高
        next = 0; // 右最高
    let result = 0; // 结果
    while (left < right) {
        prev = Math.max(height[left], prev);
        next = Math.max(height[right], next);
        if (prev < next) {
            result += prev - height[left];
            left++;
        } else {
            result += next - height[right];
            right--;
        }
    }
    return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
