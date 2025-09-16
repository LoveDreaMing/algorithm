function movingCount(threshold, rows, cols) {
    // write code here
    const flags = Array.from({ length: rows }, () =>
        new Array(cols).fill(false)
    );
    const arr = new Array(Math.max(rows, cols)).fill(0);
    for (let i = 0; i < arr.length; i++) {
        let n = i;
        while (n > 0) {
            arr[i] += n % 10;
            n = Math.floor(n / 10);
        }
    }
    const sums = Array.from({ length: rows }, () => new Array(cols));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            sums[i][j] = arr[i] + arr[j];
        }
    }
    const dirctions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];
    let total = 0;
    function dfs(r, c) {
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            flags[r][c] ||
            sums[r][c] > threshold
        )
            return;
        flags[r][c] = true;
        total++;
        for (let i = 0; i < dirctions.length; i++) {
            const [dr, dc] = dirctions[i];
            dfs(r + dr, c + dc);
        }
    }
    dfs(0, 0);
    return total;
}

module.exports = {
    movingCount: movingCount
};
