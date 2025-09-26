/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let res = 0; // 结果
    const stack = []; // 数字栈和正负栈
    let sign = 1; // 正数还是负数
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const cur = s[i];
        if (/\d/.test(cur)) {
            let val = Number(cur);
            while (i + 1 < len && /\d/.test(s[i + 1])) {
                val = val * 10 + Number(s[i + 1]);
                i++;
            }
            res += val * sign;
        } else if (cur === '+') {
            sign = 1;
        } else if (cur === '-') {
            sign = -1;
        } else if (cur === '(') {
            stack.push(res);
            stack.push(sign);
            res = 0;
            sign = 1;
        } else if (cur === ')') {
            const signPop = stack.pop();
            const resPop = stack.pop();
            res = signPop * res + resPop;
        }
    }
    return res;
};

console.log(calculate('1 + 1')); // 2
console.log(calculate('2-1 + 2')); // 3
console.log(calculate('(1+(4+5+2)-3)+(6+8)')); // 23
console.log(calculate('1-(     -2)')); // 3
