/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLocaleLowerCase();
  const reg = /[a-z0-9]/;
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (!reg.test(s[left])) {
      left++;
      continue;
    }
    if (!reg.test(s[right])) {
      right--;
      continue;
    }
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
