/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const numStack = []; // 数字栈
    const strStack = []; // 字符串栈
    let digit = 0; // 重复出现次数
    let result = ''; // 拼接的字符串
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (/\d/.test(cur)) {
            digit = digit * 10 + Number(cur);
        } else if (/[a-z]/.test(cur)) {
            result += cur;
        } else if (cur === '[') {
            numStack.push(digit);
            strStack.push(result);
            digit = 0;
            result = '';
        } else if (cur === ']') {
            const count = numStack.pop();
            let str = strStack.pop(); // 数字之前的字符串
            for (let i = 0; i < count; i++) {
                str += result;
            }
            result = str;
        }
    }
    return result;
};

console.log(decodeString('3[a]2[bc]')); // aaabcbc
console.log(decodeString('3[a2[c]]')); // accaccacc
console.log(decodeString('2[abc]3[cd]ef')); // abcabccdcdcdef
console.log(decodeString('abc3[cd]xyz')); // abccdcdcdxyz
