/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const end = nums.length - 1;
  let left = 0,
    right = end;
  let result = 0;
  while (left < end) {
    while (left < right) {
      if (nums[left] === nums[right]) {
        result++;
      }
      right--;
    }
    left++;
    right = end;
  }
  return result;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
console.log(numIdenticalPairs([1, 2, 3])); // 0
