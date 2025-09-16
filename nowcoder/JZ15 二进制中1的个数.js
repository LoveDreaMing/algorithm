/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 */

// n &= n - 1 叫清除二进制中最右边的 1，n和n-1的&之后最右边的1会变成0
function NumberOf1(n) {
    // write code here
    let total = 0;
    while (n !== 0) {
        total++;
        n &= n - 1;
    }
    return total;
}
module.exports = {
    NumberOf1: NumberOf1
};
