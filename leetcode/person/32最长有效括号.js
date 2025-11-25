/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const stack = [-1];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (cur === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i); // 设置新的起点索引
            } else {
                max = Math.max(max, i - stack.at(-1));
            }
        }
    }
    return max;
};

console.log(longestValidParentheses('(()')); // 2
console.log(longestValidParentheses(')()())')); // 4
console.log(longestValidParentheses('')); // 0
console.log(longestValidParentheses('(()())')); // 6
console.log(longestValidParentheses('()(()')); // 2
