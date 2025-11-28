/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let res = 0,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    const left = i - k + 1;
    if (left < 0) continue;
    if (sum >= k * threshold) {
      res++;
    }
    sum -= arr[left];
  }
  return res;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)); // 3
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)); // 6
