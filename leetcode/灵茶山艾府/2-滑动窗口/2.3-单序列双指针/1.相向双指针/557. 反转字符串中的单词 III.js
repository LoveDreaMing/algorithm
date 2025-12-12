/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function (s) {
//   const arr = s.split(' ');
//   let res = '';
//   for (const word of arr) {
//     const wArr = word.split('');
//     let left = 0;
//     let right = wArr.length - 1;
//     while (left < right) {
//       [wArr[left], wArr[right]] = [wArr[right], wArr[left]];
//       left++;
//       right--;
//     }
//     res += res.length ? ' ' + wArr.join('') : wArr.join('');
//   }
//   return res;
// };

var reverseWords = function (s) {
  return s
    .split(/(\s+)/)
    .map((word) => {
      return /\s+$/.test(word) ? word : [...word].reverse().join('');
    })
    .join('');
};

console.log(reverseWords("Let's take LeetCode contest")); // s'teL ekat edoCteeL tsetnoc
console.log(reverseWords('Mr Ding')); // rM gniD
