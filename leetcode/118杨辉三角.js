/**
 * 118. 杨辉三角
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
在「杨辉三角」中，每个数是它左上方和右上方的数的和。
示例 1:
输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
示例 2:
输入: numRows = 1
输出: [[1]]
*/

/**
 * 正确
 * 思路：创建一个res二维数组，numRows行和numRows列，每一位都填上1
 * 如果numRows小于3，直接返回res
 * 从第三行开始遍历，除去每一行的第一个元素和最后一个元素，其他元素都等于 i-1 上一行的 j-1 和 j 之和
 * 最后返回res
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const res = [];
    for (let i = 0; i < numRows; i++) {
        res[i] = new Array(i + 1).fill(1);
    }
    if (numRows < 3) return res;
    for (let i = 2; i < numRows; i++) {
        for (let j = 1; j < res[i].length -1; j++) {
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
        }
    }
    return res;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
console.log(generate(2)); // [[1],[1,1]]
