/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function (grid, x, y, k) {
  for (let i = y; i < y + k; i++) {
    let left = x,
      right = x + k - 1;
    while (left < right) {
      [grid[left][i], grid[right][i]] = [grid[right][i], grid[left][i]];
      left++;
      right--;
    }
  }
  return grid;
};

console.log(
  reverseSubmatrix(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ],
    1,
    0,
    3
  )
);
console.log(
  reverseSubmatrix(
    [
      [3, 4, 2, 3],
      [2, 3, 4, 2]
    ],
    0,
    2,
    2
  )
);
