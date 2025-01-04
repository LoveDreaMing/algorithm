/**
 * 3.数字字符串格式化
 * 问题描述
小M在工作时遇到了一个问题，他需要将用户输入的不带千分位逗号的数字字符串转换为带千分位逗号的格式，并且保留小数部分。
小M还发现，有时候输入的数字字符串前面会有无用的 0，这些也需要精简掉。请你帮助小M编写程序，完成这个任务。
测试样例
样例1：
输入：s = "1294512.12412"
输出：'1,294,512.12412'
样例2：
输入：s = "0000123456789.99"
输出：'123,456,789.99'
样例3：
输入：s = "987654321"
输出：'987,654,321'
*/
function solution(s) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    let [prev, next] = s.split('.');
    prev = prev.replace(/^0+/, '').replace(/\B(?=(\d{3})+$)/g, ',');
    if (next) {
        prev = prev + '.' + next;
    }
    return prev;
}

function main() {
    console.log(solution('1294512.12412') === '1,294,512.12412');
    console.log(solution('0000123456789.99') === '123,456,789.99');
    console.log(solution('987654321') === '987,654,321');
}

main();
