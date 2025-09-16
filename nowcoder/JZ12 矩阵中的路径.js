/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param matrix char字符型二维数组
 * @param word string字符串
 * @return bool布尔型
 */
function hasPath(matrix, word) {
    // write code here
    const rows = matrix.length,
        cols = matrix[0].length;

    const flags = Array.from({ length: rows }, () =>
        new Array(cols).fill(false)
    );
    const dirctions = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0]
    ];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(0, i, j)) {
                return true;
            }
        }
    }
    return false;
    function dfs(cur, r, c) {
        if (cur === word.length) {
            return true;
        }
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            flags[r][c] ||
            matrix[r][c] !== word[cur]
        ) {
            return false;
        }
        flags[r][c] = true;
        for (const [dr, dc] of dirctions) {
            if (dfs(cur + 1, r + dr, c + dc)) {
                return true;
            }
        }
        flags[r][c] = false;
        return false;
    }
}

console.log(
    hasPath(
        [
            ['a', 'b', 'c', 'e'],
            ['s', 'f', 'c', 's'],
            ['a', 'd', 'e', 'e']
        ],
        'abcced'
    )
);
module.exports = {
    hasPath: hasPath
};
