/**
 * @param {number[]} prices
 * @return {number[]}
 */
// 暴力解法，双循环
var finalPrices = function (prices) {
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                prices[i] = prices[i] - prices[j];
                break;
            }
        }
    }
    return prices;
};

/**
 * @param {number[]} prices
 * @return {number[]}
 */
// 倒叙循环，用stack的栈顶保存最右侧比当前元素小的值
var finalPrices = function (prices) {
    const stack = [];
    const res = [];
    for (let i = prices.length - 1; i >= 0; i--) {
        const cur = prices[i];
        while (stack.length > 0 && stack.at(-1) > cur) {
            stack.pop();
        }
        if (stack.length > 0) {
            res[i] = cur - stack.at(-1);
        } else {
            res[i] = cur;
        }
        stack.push(cur);
    }
    return res;
};

console.log(finalPrices([8, 4, 6, 2, 3])); // [ 4, 2, 4, 2, 3 ]
console.log(finalPrices([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(finalPrices([10, 1, 1, 6])); // [ 9, 0, 1, 6 ]
