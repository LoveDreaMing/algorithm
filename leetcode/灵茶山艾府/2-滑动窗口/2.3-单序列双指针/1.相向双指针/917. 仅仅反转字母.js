/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const reg = /[a-zA-Z]/;
  const arr = s.split('');
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (!reg.test(arr[left])) {
      left++;
      continue;
    }
    if (!reg.test(arr[right])) {
      right--;
      continue;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join('');
};

console.log(reverseOnlyLetters('ab-cd')); // dc-ba
console.log(reverseOnlyLetters('a-bC-dEf-ghIj')); // j-Ih-gfE-dCba
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!')); // Qedo1ct-eeLg=ntse-T!
console.log(reverseOnlyLetters('7_28]')); // 7_28]
