/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
  arr.sort((a, b) => a - b);
  const len = arr.length;
  const mod = 1_000_000_007;
  let res = 0;
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1,
      right = len - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === target) {
        if (arr[left] === arr[right]) {
          const n = right - left + 1;
          res = (res + (n * (n - 1)) / 2) % mod;
          break;
        } else {
          let l = 1,
            r = 1;
          while (left < right && arr[left] === arr[left + l]) l++;
          while (left < right && arr[right] === arr[right - r]) r++;
          res = (res + l * r) % mod;
          left += l;
          right -= r;
        }
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

console.log(threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8)); // 20
console.log(threeSumMulti([1, 1, 2, 2, 2, 2], 5)); // 12
