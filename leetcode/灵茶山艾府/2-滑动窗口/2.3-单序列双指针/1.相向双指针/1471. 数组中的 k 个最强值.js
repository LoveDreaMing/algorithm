/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  arr.sort((a, b) => a - b);
  const res = [];
  let left = 0,
    right = arr.length - 1;
  const m = arr[(right - left) >> 1];
  while (left <= right) {
    const l = Math.abs(arr[left] - m);
    const r = Math.abs(arr[right] - m);
    if (r >= l) {
      res.push(arr[right]);
      right--;
    } else {
      res.push(arr[left]);
      left++;
    }
  }
  return res.slice(0, k);
};

console.log(getStrongest([1, 2, 3, 4, 5], 2)); // [5,1]
console.log(getStrongest([1, 1, 3, 5, 5], 2)); // [5,5]
console.log(getStrongest([6, 7, 11, 7, 6, 8], 5)); // [11,8,6,6,7]
