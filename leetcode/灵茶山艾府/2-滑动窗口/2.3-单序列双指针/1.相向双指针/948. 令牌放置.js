/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  tokens.sort((a, b) => a - b);
  let res = 0;
  let max = 0;
  let left = 0,
    right = tokens.length - 1;
  while (left <= right) {
    if (power >= tokens[left]) {
      res++;
      max = Math.max(res, max);
      power -= tokens[left];
      left++;
    } else {
      if (res > 0) {
        res--;
        power += tokens[right];
        right--;
      } else {
        return max;
      }
    }
  }
  return max;
};

console.log(bagOfTokensScore([100], 50)); // 0
console.log(bagOfTokensScore([200, 100], 150)); // 1
console.log(bagOfTokensScore([100, 200, 300, 400], 200)); // 2
console.log(bagOfTokensScore([26], 51)); // 1
console.log(bagOfTokensScore([100, 200, 200, 200, 200], 200)); // 1
