/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
  // 超时
  function isPalindrome(str) {
    let left = 0,
      right = str.length - 1;
    while (left <= right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  const len = a.length;
  const res = new Array(len).fill(false);
  for (let i = 0; i <= len; i++) {
    const aPre = a.slice(0, i);
    const aSuf = a.slice(i);
    const bPre = b.slice(0, i);
    const bSuf = b.slice(i);
    res[i] = isPalindrome(aPre + bSuf) || isPalindrome(bPre + aSuf);
  }
  return res.indexOf(true) > -1;
};

var checkPalindromeFormation = function (a, b) {
  function isPalindrome(s, l, r) {
    while (l <= r) {
      if (s[l] !== s[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }
  function check(s1, s2) {
    let left = 0,
      right = s1.length - 1;
    while (left < right && s1[left] === s2[right]) {
      left++;
      right--;
    }
    return isPalindrome(s1, left, right) || isPalindrome(s2, left, right);
  }
  return check(a, b) || check(b, a);
};

console.log(checkPalindromeFormation('x', 'y')); // true
console.log(checkPalindromeFormation('xbdef', 'xecab')); // false
console.log(checkPalindromeFormation('ulacfd', 'jizalu')); // true
console.log(checkPalindromeFormation('abdef', 'fecab')); // true
console.log(checkPalindromeFormation('xx', 'yy')); // true
console.log(checkPalindromeFormation('abccef', 'cgdhga')); // false
console.log(
  checkPalindromeFormation('pvhmupgqeltozftlmfjjde', 'yjgpzbezspnnpszebzmhvp')
); // true
