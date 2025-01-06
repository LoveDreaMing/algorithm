/**
 * 73. 矩阵置零
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
示例 1：
输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]
示例 2：
输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
提示：
m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
进阶：
一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个仅使用常量空间的解决方案吗？
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/**
 * 正确
 * 思路：定义一个行数组和一个列数组，然后把每一项都填充成1
 * 然后双循环遍历矩阵，当matrix[row][col]等于0时，把rowArr[row] 和 colArr[col] 都改成0
 * 以相同的方式再遍历矩阵，然后到rowArr[row] === 0 或 colArr[col] === 0的时候就把matrix[row][col] = 0
 * 最后返回matrix
 */
var setZeroes = function (matrix) {
    const rowArr = new Array(matrix.length).fill(1);
    const colArr = new Array(matrix[0].length).fill(1);
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                rowArr[row] = colArr[col] = 0;
            }
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (rowArr[row] === 0 || colArr[col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }
    return matrix;
};

console.log(
    setZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ])
); // [ [ 1, 0, 1 ], [ 0, 0, 0 ], [ 1, 0, 1 ] ]
console.log(
    setZeroes([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
    ])
); // [ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]
