/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 */

// 递归
function Fibonacci(n) {
    // write code here
    if (n < 3) return 1;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// 循环遍历
function Fibonacci(n) {
    // write code here
    const arr = [1, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
}

// 循环遍历 + 变量
function Fibonacci(n) {
    // write code here
    if (n < 3) return 1;
    let result = 0,
        prev = 1,
        next = 1;
    for (let i = 3; i <= n; i++) {
        result = prev + next;
        prev = next;
        next = result;
    }
    return result;
}

module.exports = {
    Fibonacci: Fibonacci
};
