/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  const all = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const item = [arr[i], arr[j], arr[k]];
        all.push(item);
      }
    }
  }
  let result = 0;
  for (let i = 0; i < all.length; i++) {
    const [first, second, third] = all[i];
    if (
      Math.abs(first - second) <= a &&
      Math.abs(second - third) <= b &&
      Math.abs(first - third) <= c
    ) {
      result++;
    }
  }
  return result;
};

var countGoodTriplets = function (arr, a, b, c) {
  const len = arr.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          result++;
        }
      }
    }
  }
  return result;
};

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)); // 4
console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)); // 0
