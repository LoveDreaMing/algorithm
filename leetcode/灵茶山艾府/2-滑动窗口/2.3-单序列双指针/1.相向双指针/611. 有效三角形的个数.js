/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  // 注意：需要固定最长边，用两个短边计算个数，否则会漏掉一些情况
  nums.sort((a, b) => b - a);
  const len = nums.length;
  let res = 0;
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1,
      right = len - 1;
    while (left < right) {
      if (nums[i] < nums[left] + nums[right]) {
        // 三角形成立，只需要两个小的边长相加的和大于最长的边长即成立
        res += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

var triangleNumber = function (nums) {
  // 这种以固定最短边，用长边计算就会少计数，比如：[2, 2, 3, 4]，第一次i:2、left:2、right:4，这时left++，就把223漏掉了
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let res = 0;
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1,
      right = len - 1;
    while (left < right) {
      if (nums[i] + nums[left] > nums[right]) {
        // 三角形成立，只需要两个小的边长相加的和大于最长的边长即成立
        res += right - left;
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};

var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let res = 0;
  for (let i = len - 1; i >= 2; i--) {
    let left = 0,
      right = i - 1;
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        res += right - left;
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};

console.log(triangleNumber([2, 2, 3, 4])); // 3
console.log(triangleNumber([4, 2, 3, 4])); // 4
