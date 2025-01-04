/**
 * 2.徒步旅行中的补给问题
 * 问题描述
小明想从A徒步到B，总路程需要N天，路程中为了确保安全，小明每天需要消耗1份食物。
从起点开始，小明每天都能遇到一个补给站，可以补充食物，不同补给站的食物价格可能不同。
小明最多能同时携带K份食物，请问小明若要安全完成徒步，最少要花多少钱？
输入格式
第一行为两个正整数N、K，代表总路程N天，最大负重K。
第二行为N个正整数，分别代表从第0天到第N-1天，每一个补给站的食物价格。
输出格式
输出一个正整数，代表最少花费金额。
输入样例
5 2
1 2 3 3 2
输出样例
9
说明：第0天买2份食物，花费2元；第一天买1份食物，花费2元；第三天买一份食物，花费3元；第四天买1份食物，花费2元；共花费9元。
数据范围
30%的数据，N <= 100，K <= N，0 <= B <= 100
80%的数据，N <= 10000， K <= 100， 0 <= B <= 100
100%的数据，N <= 1000000， K <= N，0 <= B <= 100

1: 1*1 = 1
2: 1*2 = 2
3: 1*2+2*1 = 4
4: 1*2+2*1+3*1 = 7
5: 1*2+2*1+3*1+2*1 = 9

k=1;solution(n, k, data) = solution(n-2, k, data) + data[n-1]
k=2;solution(n, k, data) = Math.min(solution(n-3, k, data) + data[n-2], solution(n-2, k, data) + data[n-1]);
*/

function solution(n, k, data) {
    // Edit your code here
    let total = 0; // 总共花费
    let current = 0; // 当前剩余食物
    for (let i = 0; i < n; i++) {
        if (current < 1) {
            let buy = Math.min(k - current, 1);
            total += buy * data[i];
            current += buy;
        }
        current--; // 每天消耗1份食物
        console.log('total', total);
    }
    return total;
}

function main() {
    // Add your test cases here
    console.log(solution(5, 2, [1, 2, 3, 3, 2]) === 9);
}

main();
