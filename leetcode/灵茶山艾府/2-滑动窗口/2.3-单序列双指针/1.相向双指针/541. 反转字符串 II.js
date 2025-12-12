/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const arr = s.split('');
  const n = Math.ceil(arr.length / k / 2);
  for (let i = 0; i < n; i++) {
    let left = i * k * 2,
      right = Math.min(i * k * 2 + k - 1, arr.length - 1); // 注意边界，右边界最大值不能超过数组长度
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join('');
};

// 每2*k阶段开始遍历，把字符串分成几段，然后翻转每一段的前k个元素，注释最后一段右边届不能超过数组长度
var reverseStr = function (s, k) {
  const arr = s.split('');
  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, arr.length - 1);
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join('');
};

console.log(reverseStr('abcdefg', 2)); // bacdfeg
console.log(reverseStr('abcd', 2)); // bacd
