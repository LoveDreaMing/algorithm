/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 暴力解法：超出时间限制
var dailyTemperatures = function (temperatures) {
    const len = temperatures.length;
    const res = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (temperatures[j] > temperatures[i]) {
                res[i] = j - i;
                break;
            }
        }
    }
    return res;
};

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 暴力解法2：超出时间限制
var dailyTemperatures = function (temperatures) {
    const len = temperatures.length;
    const res = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        let right = i + 1;
        while (right < len && temperatures[right] <= temperatures[i]) {
            right++;
        }
        if (right < len) {
            res[i] = right - i;
        }
    }
    return res;
};

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 单调栈的栈顶保存每个元素的索引，遇到当前元素大于栈顶时，就出栈且把当前位置设置成当前位置索引减去栈顶元素索引
var dailyTemperatures = function (temperatures) {
    const stack = [];
    const res = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack.at(-1)]
        ) {
            const cur = stack.pop();
            res[cur] = i - cur;
        }
        stack.push(i);
    }
    while (stack.length > 0) {
        res[stack.pop()] = 0;
    }
    return res;
};

var dailyTemperatures = function (temperatures) {
    const stack = [];
    const len = temperatures.length;
    const res = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack.at(-1)]
        ) {
            const cur = stack.pop();
            res[cur] = i - cur;
        }
        stack.push(i);
    }
    return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [ 1, 1, 1, 0 ]
console.log(dailyTemperatures([30, 60, 90])); // [1, 1, 0]
