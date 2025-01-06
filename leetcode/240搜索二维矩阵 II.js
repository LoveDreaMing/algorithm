/**
 * 240. 搜索二维矩阵 II
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
示例 1：
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true
示例 2：
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
输出：false
提示：
m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-109 <= matrix[i][j] <= 109
每行的所有元素从左到右升序排列
每列的所有元素从上到下升序排列
-109 <= target <= 109
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/**
 * 超时
 * 思路：暴力解法，遍历每一个数去判断
 */
// var searchMatrix = function (matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             if (matrix[i][j] === target) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

/**
 * 正确
 * 思路：定义上边界top和右边界right，
 * 当top小于等于matrix.length - 1，并且right 大于等于 0时进入循环，
 * 判断matrix[top][right] 等于 target，则返回true，
 * 大于 target，则向左移动right--，
 * 否则 小于 target，则向下移动top++，
 * 最后如果遍历结束没有找到，则返回false
*/
var searchMatrix = function (matrix, target) {
    let top = 0,
        right = matrix[0].length - 1;
    while (top <= matrix.length - 1 && right >= 0) {
        if (matrix[top][right] === target) {
            return true;
        } else if (matrix[top][right] > target) {
            right--;
        } else {
            top++;
        }
    }
    return false;
};

console.log(
    searchMatrix(
        [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30]
        ],
        5
    )
); // true
console.log(
    searchMatrix(
        [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30]
        ],
        20
    )
); // false
