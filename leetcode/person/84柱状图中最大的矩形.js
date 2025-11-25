/**
 * @param {number[]} heights
 * @return {number}
 */
// 单调栈的栈顶始终保存着比当前元素小的值的索引，方便计算宽度
var largestRectangleArea = function (heights) {
    const stack = []; // 栈顶始终保存着比当前元素小的值的索引，方便计算宽度
    const newHeights = [0, ...heights, 0];
    let res = 0;
    for (let i = 0; i < newHeights.length; i++) {
        // 当前元素小于栈顶元素，说明栈顶元素找到了右边界，就可以计算栈顶元素的最大矩形了
        while (stack.length > 0 && newHeights[i] < newHeights[stack.at(-1)]) {
            const cur = stack.pop(); // 栈顶元素的索引
            const curHeight = newHeights[cur]; // 栈顶元素的高度
            const leftBorder = stack.at(-1); // 左边界位置
            const rightBorder = i; // 右边界位置
            const w = rightBorder - leftBorder - 1;
            res = Math.max(res, w * curHeight);
        }
        stack.push(i);
    }
    return res;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
// 暴力解法：从当前元素往左右两边寻找比当前元素矮的，两边索引相减+1即为计算当前元素高度的最大矩阵宽度
var largestRectangleArea = function (heights) {
    let res = 0;
    for (let i = 0; i < heights.length; i++) {
        let left = i;
        let right = i;
        while (left > 0 && heights[left - 1] >= heights[i]) {
            left--;
        }
        while (right < heights.length - 1 && heights[right + 1] >= heights[i]) {
            right++;
        }
        const w = right - left + 1;
        res = Math.max(res, w * heights[i]);
    }
    return res;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log(largestRectangleArea([2, 4])); // 4
