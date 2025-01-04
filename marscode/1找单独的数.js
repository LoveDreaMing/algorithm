/**
 * 1.找单独的数
 * 问题描述
有一堆数字，除了一个数字，其它的数字都是成对出现。班上的每个同学拿一个数字，正好将这些数字全部拿完，问如何快速找到拿了单独数字的同学？
输入格式
空格分隔输入所有的数字
输出格式
单独的那个数字
输入样例(1)
1 1 2 2 3 3 4 5 5
输出样例(1)
4
输入样例(2)
0 1 0 1 2
输出样例(2)
2
*/

function solution(cards) {
    // Edit your code here
    const map = new Map();
    for (const key of cards) {
        if (map.has(key)) {
            map.delete(key);
        } else {
            map.set(key, 1);
        }
    }
    const result = [...map.keys()];
    if (result[0]) {
        return result[0];
    }
    return 0;
}

function main() {
    // Add your test cases here
    console.log(solution([1, 1, 2, 2, 3, 3, 4, 5, 5]) === 4);
    console.log(solution([0, 1, 0, 1, 2]) === 2);
}

main();
