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

/**
 * @param {number[]} height
 * @return {number}
 */
// 一列一列计算：利用双指针，和left和right保存左侧最高和右侧最高，当left小于right，说明水位是参照左侧计算的，就用左侧最高值-当前槽底的值就是一个水位的值，反之从右侧开始计算
var trap = function (height) {
    let start = 0,
        end = height.length - 1; // 起点和终点
    let left = 0,
        right = 0; // 左最高和右最高
    let res = 0;
    while (start < end) {
        left = Math.max(left, height[start]);
        right = Math.max(right, height[end]);
        if (left < right) {
            res += left - height[start];
            start++;
        } else {
            res += right - height[end];
            end--;
        }
    }
    return res;
};

/**
 * @param {number[]} height
 * @return {number}
 */
// 一层一层计算：使用stack栈把元素的下标一个一个添加进去，
// 只有当栈不为空且即将添加的元素大于栈顶位置元素的时候才可能形成凹槽，这时用来计算水位，
// 从stack弹出一个元素的下标用来作为槽底，只要还有左边界就一层一层的把水位值叠加起来
var trap = function (height) {
    if (height.length <= 2) return 0;
    const stack = [];
    let res = 0;
    for (let i = 0; i < height.length; i++) {
        while (stack.length > 0 && height[i] > height[stack.at(-1)]) {
            const bottom = stack.pop(); // 槽底的索引位置
            // 需要判断还有左边界
            if (stack.length > 0) {
                const left = stack.at(-1);
                const h = Math.min(height[left], height[i]) - height[bottom]; // 槽的高度
                const w = i - left - 1; // 槽的宽度
                res += h * w;
            }
        }
        stack.push(i);
    }
    return res;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
