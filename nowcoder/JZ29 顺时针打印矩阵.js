// 使用方向变量改变移动的方向，注意需要用nextRow和nextCol来判断改变方向，直接用row和col容易跑出边界
function printMatrix(matrix) {
    if (!matrix || matrix.length === 0) return [];
    // write code here
    const result = [];
    let left = 0,
        right = matrix[0].length - 1,
        top = 0,
        bottom = matrix.length - 1;
    let row = 0,
        col = 0;
    let directionX = 0,
        directionY = 1;
    while (left <= right && top <= bottom) {
        result.push(matrix[row][col]);
        const nextRow = row + directionX;
        const nextCol = col + directionY;
        if (nextCol > right) {
            top++;
            directionX = 1;
            directionY = 0;
        } else if (nextRow > bottom) {
            right--;
            directionX = 0;
            directionY = -1;
        } else if (nextCol < left) {
            bottom--;
            directionX = -1;
            directionY = 0;
        } else if (nextRow < top) {
            left++;
            directionX = 0;
            directionY = 1;
        }
        row += directionX;
        col += directionY;
    }
    return result;
}
// 迭代
function printMatrix(matrix) {
    if (!matrix || matrix.length === 0) return [];
    const result = [];
    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
        // 向右移动
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        // 向下移动
        for (let i = top + 1; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        // 处理单行情况
        if (top !== bottom) {
            // 向左移动
            for (let i = right - 1; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
        }
        // 处理单列情况
        if (left !== right) {
            // 向上移动
            for (let i = bottom - 1; i > top; i--) {
                result.push(matrix[i][left]);
            }
        }
        top++;
        bottom--;
        left++;
        right--;
    }
    return result;
}
console.log(
    printMatrix([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ])
);
module.exports = {
    printMatrix: printMatrix
};
