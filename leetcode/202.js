/**
 * 202. 快乐数
 * 编写一个算法来判断一个数 n 是不是快乐数。
「快乐数」 定义为：
对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。
如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
示例 1：
输入：n = 19
输出：true
解释：
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
示例 2：
输入：n = 2
输出：false
*/

/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * 正确
 * 思路：把数字转化为字符串遍历每一位，每一位平方后相加，得到新的数字再循环执行，直到数字小于6为止，因为1到5里面，只有1是true，其他都是无限循环
 */
var isHappy = function (n) {
    n = String(n);
    function handle(n) {
        if (Number(n) < 6) return n;
        let sum = 0;
        for (let i = 0; i < n.length; i++) {
            sum += Math.pow(Number(n[i]), 2);
        }
        return handle(String(sum));
    }
    return handle(n) === '1';
};

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
console.log(isHappy(7)); // true
console.log(isHappy(6)); // false
