/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串
 * @param pattern string字符串
 * @return bool布尔型
 */
function match(str, pattern) {
    // write code here
    const rows = str.length,
        cols = pattern.length;
    const dp = Array.from({ length: rows + 1 }, () =>
        new Array(cols + 1).fill(false)
    );
    dp[0][0] = true;
    for (let i = 1; i <= cols; i++) {
        if (pattern[i - 1] === '*') {
            dp[0][i] = dp[0][i - 2];
        }
    }
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (str[i - 1] === pattern[j - 1] || pattern[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (pattern[j - 1] === '*') {
                if (pattern[j - 2] === str[i - 1] || pattern[j - 2] === '.') {
                    dp[i][j] = dp[i][j - 1] || dp[i - 1][j] || dp[i][j - 2];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }
    return dp[rows][cols];
}
module.exports = {
    match: match
};
