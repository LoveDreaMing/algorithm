/**
 * 5.寻找最大葫芦
 * 问题描述
德州扑克是一种经典的扑克游戏，里面有一种牌型叫“葫芦”。
“葫芦”由五张牌组成，其中包含三张一样的牌a和另外两张一样的牌b。
“葫芦”跟“葫芦”之间可以比较大小，先比较a的大小，如果a一样大再比较b的大小。
德州扑克不包含大小王，只包含常规的52张牌。在13种不同的牌面里面，大小规则是A > K > Q > J > 10 > 9 > ... > 2。也就是说，A最大，K次之，2最小。
这里给“葫芦”加一个限制规则，“葫芦”的牌面值之和不能超过max（可以等于），A，2，3，...，J，Q，K的牌面值分别是1到13。
问题
给出n张牌，从里面寻找符合规则的最大葫芦组合
输入格式
第一行输入两个整数，代表牌的数量n和牌面值之和的限制max
第二行输入n个整数，代表n张牌的牌面，其中数字1代表牌面A，数字2到10分别代表牌面2到10，11代表牌面J，12代表牌面Q，13代码牌面K。
输出格式
最大的葫芦组合里面，三张的牌面和两张的牌面，如果没有葫芦则输出“0，0”
输入样式
样例1
9 34
6 6 6 8 8 8 5 5 1
样例2
9 37
9 9 9 9 6 6 6 6 13
样例3
9 40
1 11 13 12 7 8 11 5 6
输出样式
样例1
8 5
样例2
6 9
样例3
0 0

数据范围
牌数n的范围：5 < n < 40，0 < max < 100
牌面的范围：1 ≤ v ≤ 13
跟现实中扑克一样，每种牌面最多4张
*/

function solution(n, max, array) {
    // Edit your code here
    const arr = array.sort((a, b) => b - a);
    const map = new Map();
    const over2 = [],
        over3 = [];
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        if (map.has(arr[i])) {
            map.set(key, map.get(key) + 1);
            if (map.get(key) === 2 && !over2.includes(key)) {
                over2.push(key);
            } else if (map.get(key) === 3 && !over3.includes(key)) {
                over3.push(key);
            }
        } else {
            map.set(key, 1);
        }
    }
    if (over2[over2.length - 1] * 2 + over3[over3.length - 1] * 3 > max) {
        return [0, 0];
    }
    let idx2 = 0,
        idx3 = 0;
    while (over2[idx2] * 2 + over3[idx3] * 3 > max) {
        idx2++;
        if (
            idx2 === over2.length - 1 &&
            over2[idx2] * 2 + over3[idx3] * 3 > max
        ) {
            idx3++;
            idx2 = 0;
        }
    }
    if (over2[idx2] && over3[idx3]) {
        return [over3[idx3], over2[idx2]];
    }
    return [0, 0];
}

function main() {
    // Add your test cases here
    console.log(
        JSON.stringify(solution(9, 34, [6, 6, 6, 8, 8, 8, 5, 5, 1])) ===
            JSON.stringify([8, 5])
    );
    console.log(
        JSON.stringify(solution(9, 37, [9, 9, 9, 9, 6, 6, 6, 6, 13])) ===
            JSON.stringify([6, 9])
    );
    console.log(
        JSON.stringify(solution(9, 40, [1, 11, 13, 12, 7, 8, 11, 5, 6])) ===
            JSON.stringify([0, 0])
    );
}

main();
