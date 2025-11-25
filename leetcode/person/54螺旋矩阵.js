/**
 * 54. 螺旋矩阵
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
示例 1：
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
提示：
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/**
 * 正确
 * 思路：先计算矩阵里的数字总和total，
 * 然后设置上下左右边界，以及起始的行列坐标，和开始的起始方向
 * 当result.length < total始终进入循环，
 * 当方向向右时，列col++，到达边界时方向改成向下，并且上边界upBorder++，
 * 当方向向下时，行row++，到达边界时方向改成向左，并且右边界rightBorder--，
 * 当方向向左时，列col--，到达边界时方向改成向上，并且下边界downBorder--，
 * 当方向向上时，行row--，到达边界时方向改成向右，并且上边界leftBorder++，
 */
// var spiralOrder = function (matrix) {
//     // 计算总数
//     const total = matrix.reduce((sum, cur) => {
//         return sum + cur.length
//     }, 0)
//     const result = [];
//     // 上下左右边界
//     let upBorder = 0,
//         downBorder = matrix.length - 1,
//         leftBorder = 0,
//         rightBorder = matrix[0].length - 1;
//     // 行列
//     let row = 0,
//         col = 0;
//     // 起始方向
//     let dirction = rightBorder > leftBorder ? 'right' : 'down';
//     while (result.length < total) {
//         result.push(matrix[row][col]);
//         if (dirction === 'right') {
//             col++;
//             if (col >= rightBorder) {
//                 dirction = 'down';
//                 upBorder++;
//             }
//         } else if (dirction === 'down') {
//             row++;
//             if (row >= downBorder) {
//                 dirction = 'left';
//                 rightBorder--;
//             }
//         } else if (dirction === 'left') {
//             col--;
//             if (col <= leftBorder) {
//                 dirction = 'up';
//                 downBorder--;
//             }
//         } else if (dirction === 'up') {
//             row--;
//             if (row <= upBorder) {
//                 dirction = 'right';
//                 leftBorder++;
//             }
//         }
//     }
//     return result;
// };

/**
 * 正确
 * 思路：定义上下左右边界，
 * 使用while循环，定义四个方向的for循环，往result里面插入数字，
 * 向右遍历结束之后让top++,
 * 向下遍历结束之后让right--，
 * 向左遍历结束之后让bottom--，
 * 向上遍历结束之后让left++,
 * 每次遍历结束后，改变top、right、bottom、left都需要判断是否到达边界条件
*/
var spiralOrder = function (matrix) {
    const result = [];
    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1;
    while (1) {
        // 向右
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        if (top > bottom) break;
        // 向下
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        if (left > right) break;
        // 向左
        for (let i = right; i >= left; i--) {
            result.push(matrix[bottom][i]);
        }
        bottom--;
        if (top > bottom) break;
        // 向上
        for (let i = bottom; i >= top; i--) {
            result.push(matrix[i][left]);
        }
        left++;
        if (left > right) break;
    }
    return result;
};

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ])
); // [1,  2,  3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
