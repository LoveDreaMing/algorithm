/**
 * 1137. 第 N 个泰波那契数
 * 泰波那契序列 Tn 定义如下：
T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
示例 1：
输入：n = 4
输出：4
解释：
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
示例 2：
输入：n = 25
输出：1389537
*/

/**
 * @param {number} n
 * @return {number}
 */
/**
 * 超时
 * 思路：列举n=0、1、2时的返回值
 * 其余值则是前面3个值的和
 */
// var tribonacci = function (n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     if (n === 2) return 1;
//     return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
// };

/**
 * 超时
 * 思路：列举n=0、1、2时的返回值
 * 引入三个变量保存前3个数值，然后循环计算最后一个数等前3数之和
 */
var tribonacci = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    let num1 = 0;
    let num2 = 1;
    let num3 = 1;
    let sum = 0;
    for (let i = 3; i <= n; i++) {
        sum = num1 + num2 + num3;
        num1 = num2;
        num2 = num3;
        num3 = sum;
    }
    return sum;
};

console.log(tribonacci(4)); // 4
console.log(tribonacci(25)); // 1389537
