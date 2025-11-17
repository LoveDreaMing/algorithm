/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const row = matrix.length,
    col = matrix[0].length;
  const res = Array.from({ length: col }, () => new Array(row));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      res[j][i] = matrix[i][j];
    }
  }
  return res;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
); // [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6]
  ])
); // [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
