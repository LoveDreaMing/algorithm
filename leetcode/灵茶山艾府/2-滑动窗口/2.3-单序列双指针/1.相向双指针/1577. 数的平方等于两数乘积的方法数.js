/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  function triplets(arr1, arr2) {
    let res = 0;
    for (item of arr1) {
      let left = 0,
        right = arr2.length - 1;
      const target = item * item;
      while (left < right) {
        const product = arr2[left] * arr2[right];
        if (product === target) {
          if (arr2[left] === arr2[right]) {
            const n = right - left + 1;
            res += (n * (n - 1)) / 2;
            break;
          } else {
            let l = 1,
              r = 1;
            while (left < right && arr2[left] === arr2[left + l]) l++;
            while (left < right && arr2[right] === arr2[right - r]) r++;
            res += l * r;
            left += l;
            right -= r;
          }
        } else if (product < target) {
          left++;
        } else {
          right--;
        }
      }
    }
    return res;
  }
  return triplets(nums1, nums2) + triplets(nums2, nums1);
};

console.log(numTriplets([7, 4], [5, 2, 8, 9])); // 1
console.log(numTriplets([1, 1], [1, 1, 1])); // 9
console.log(numTriplets([7, 7, 8, 3], [1, 2, 9, 7])); // 2
console.log(numTriplets([4, 7, 9, 11, 23], [3, 5, 1024, 12, 18])); // 0
console.log(numTriplets([3, 1, 2, 2], [1, 3, 4, 4])); // 4
