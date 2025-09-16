/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型 最大位数
 * @return int整型一维数组
 */

// 数字小于2^53-1时，可以用
function printNumbers(n) {
    // write code here
    const result = [];
    for (let i = 1; i < Math.pow(10, n); i++) {
        result.push(i);
    }
    return result;
}

// 处理大数，用字符串打印
function printNumbers(n) {
    // write code here
    const result = [];
    const number = new Array(n).fill('0');
    dfs(0);
    return result;

    function dfs(digit) {
        // 递归到位数跟n一样了，把数组转化为字符串加入结果
        if (digit === n) {
            const numStr = removeLeadingZeros(number);
            if (numStr.length > 0) {
                result.push(numStr);
            }
            return;
        }
        // 递归遍历，前一位每次都遍历后一位10次，并且把后一位从0到9填充进去
        for (let i = 0; i < 10; i++) {
            number[digit] = String.fromCharCode(i + '0'.charCodeAt(0));
            dfs(digit + 1);
        }
    }

    // 去除前面多余的0
    function removeLeadingZeros(nums) {
        let i = 0;
        while(i < nums.length && nums[i] === '0') i++;
        return nums.slice(i).join('');
    }
}
module.exports = {
    printNumbers: printNumbers
};

printNumbers(2);
