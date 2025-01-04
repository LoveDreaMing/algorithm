/**
 * 4.数字分组求偶数和
 * 问题描述
小M面对一组从 1 到 9 的数字，这些数字被分成多个小组，并从每个小组中选择一个数字组成一个新的数。
目标是使得这个新数的各位数字之和为偶数。任务是计算出有多少种不同的分组和选择方法可以达到这一目标。
numbers: 一个由多个整数字符串组成的列表，每个字符串可以视为一个数字组。小M需要从每个数字组中选择一个数字。
例如对于[123, 456, 789]，14个符合条件的数为：147 149 158 167 169 248 257 259 268 347 349 358 367 369。
测试样例
样例1：
输入：numbers = [123, 456, 789]
输出：14
样例2：
输入：numbers = [123456789]
输出：4
样例3：
输入：numbers = [14329, 7568]
输出：10
*/
function solution(numbers) {
    // Please write your code here
    // for (let i = 0; i < numbers.length; i++) {
    //     const str = String(numbers[i]);
    //     const unit = Math.pow(10, str.length - 1 - i);
    //     let sum = 0;
    //     for (let j = 0; j < str.length; j++) {
    //         console.log(str[j] * unit);
    //         sum += Number(str[j]) * unit;
    //     }
    //     console.log('sum', sum);
    // }
    const result = [];
    function getSum(str, i) {
        const unit = Math.pow(10, numbers.length - 1 - i);
        for (let i = 0; i < str.length; i++) {
            console.log(str[i] * unit);
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        let sum = getSum(String(numbers[i]), i);
        if (sum % 2 === 0 && i === numbers.length - 1) {
            result.push(sum);
        }
    }
    return result.length;
}

function main() {
    // You can add more test cases here
    solution([123, 456, 789]);
    // console.log(solution([123, 456, 789]) === 14); // 奇偶奇：2*2*2=8、偶奇奇：1*1*2=2、奇奇偶：2*1*1=2、偶偶偶：1*2*1=2
    // console.log(solution([123456789]) === 4);
    // console.log(solution([14329, 7568]) === 10);
}

main();
