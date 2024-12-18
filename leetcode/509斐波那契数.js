/**
 * 509. 斐波那契数
 * 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
给定 n ，请计算 F(n) 。
示例 1：
输入：n = 2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1
示例 2：
输入：n = 3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2
示例 3：
输入：n = 4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3
*/

/**
 * @param {number} n
 * @return {number}
 */
/**
 * 正确
 * 思路：n小于时直接返回n，n大于时返回n-1和n-2的和
 */
var fib = function (n) {
    // if (n < 2) return n;
    // return fib(n - 1) + fib(n - 2);
};

var fib = function (n) {
    if (n < 2) return n;
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
};

console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
