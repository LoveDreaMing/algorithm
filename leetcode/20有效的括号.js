/**
 * 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
示例 1：
输入：s = "()"
输出：true
示例 2：
输入：s = "()[]{}"
输出：true
示例 3：
输入：s = "(]"
输出：false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * 正确
 * 思路：字符串为空，则返回false；
 * 创建一个括号开闭合的对象，用于判断括号是否匹配；
 * 然后把字符串的第一个放到栈里，然后从第二个开始遍历字符串，判断栈里的最后一个元素是否匹配；
 * 匹配的话就出栈，不匹配就入栈；
 * 最后判断栈是否为空，如果为空，则返回true，否则返回false
 */
var isValid = function (s) {
    if (s.length === 0) return false;
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        const last = stack[stack.length - 1];
        if (brackets[last] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
