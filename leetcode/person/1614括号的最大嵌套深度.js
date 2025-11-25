/**
 * @param {string} s
 * @return {number}
 */
// 用栈的长度计数
var maxDepth = function (s) {
    const stack = [];
    let max = -Infinity;
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (cur === '(') {
            stack.push(cur);
        } else if (cur === ')') {
            stack.pop();
        }
        max = Math.max(max, stack.length);
    }
    return max;
};

// 用变量count计算左括号的层数
var maxDepth = function (s) {
    let count = 0;
    let max = -Infinity;
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (cur === '(') {
            count++;
        } else if (cur === ')') {
            count--;
        }
        max = Math.max(max, count);
    }
    return max;
};

console.log(maxDepth('(1+(2*3)+((8)/4))+1')); // 3
console.log(maxDepth('(1)+((2))+(((3)))')); // 3
console.log(maxDepth('()(())((()()))')); // 3
