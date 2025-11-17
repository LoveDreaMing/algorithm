/**
 * @param {number[]} arr
 * @return {number}
 */
// 你必须设计并实现时间复杂度为 O(log(n)) 的解决方案
var peakIndexInMountainArray = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return i;
    }
  }
  return arr.length - 1;
};

var peakIndexInMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

console.log(peakIndexInMountainArray([0, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 2, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 10, 5, 2])); // 1
