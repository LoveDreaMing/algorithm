/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const arr = s.split('');
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (vowel.indexOf(arr[left]) === -1) {
      left++;
      continue;
    }
    if (vowel.indexOf(arr[right]) === -1) {
      right--;
      continue;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join('');
};

// 改进用set的has判断时间复杂度是O(1)
var reverseVowels = function (s) {
  const vowel = new Set('aeiouAEIOU');
  const arr = s.split('');
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (!vowel.has(arr[left])) {
      left++;
      continue;
    }
    if (!vowel.has(arr[right])) {
      right--;
      continue;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join('');
};

console.log(reverseVowels('IceCreAm')); // AceCreIm
console.log(reverseVowels('leetcode')); // leotcede
