/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = 0,
    right = arr.length - 1;
  while (right - left + 1 > k) {
    const l = Math.abs(arr[left] - x);
    const r = Math.abs(arr[right] - x);
    if (l <= r) {
      right--;
    } else {
      left++;
    }
  }
  return arr.slice(left, left + k);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // [1,2,3,4]
console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1)); // [1,1,2,3]
console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9)); // [10]
console.log(findClosestElements([1], 1, 1)); // [1]
console.log(findClosestElements([0, 0, 0, 1, 3, 5, 6, 7, 8, 8], 2, 2)); // [1,3]
