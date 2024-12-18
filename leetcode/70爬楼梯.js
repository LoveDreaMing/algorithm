/**
 * 70. 爬楼梯
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
示例 1：
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
示例 2：
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
*/

/**
 * @param {number} n
 * @return {number}
 */
/**
 * 超时
 * 思路：当n=1时，只有1种方式，当n=2时，有2种方式，
 * 后续的n为n-1和n-2的和
 */
// var climbStairs = function(n) {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     return climbStairs(n - 1) + climbStairs(n - 2);
// };

/**
 * 正确
 * 思路：当n=1时，只有1种方式，当n=2时，有2种方式，
 * 引入两个变量num1和num2，num1代表第n-1个台阶的方法数，num2代表第n-2个台阶的方法数
 * num1+num2即为第n个台阶的方法数
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let num1 = 1;
    let num2 = 2;
    let sum = 0;
    for (let i = 3; i <= n; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3