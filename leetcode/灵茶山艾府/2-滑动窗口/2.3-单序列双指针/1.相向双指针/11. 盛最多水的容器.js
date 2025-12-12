/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let max = 0;
  while (left < right) {
    if (height[left] >= height[right]) {
      const product = height[right] * (right - left);
      max = Math.max(max, product);
      right--;
    } else {
      const product = height[left] * (right - left);
      max = Math.max(max, product);
      left++;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
