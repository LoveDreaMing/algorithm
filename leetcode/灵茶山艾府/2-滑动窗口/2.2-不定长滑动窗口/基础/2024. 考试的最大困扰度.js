/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  let res = 0;
  let left = 0;
  const map = new Map();
  for (let right = 0; right < answerKey.length; right++) {
    const cur = answerKey[right];
    map.set(cur, (map.get(cur) || 0) + 1);
    while (map.size > 1 && Math.min(...map.values()) > k) {
      map.set(answerKey[left], map.get(answerKey[left]) - 1);
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

var maxConsecutiveAnswers = function (answerKey, k) {
  let res = 0;
  let left = 0;
  const map = new Map();
  let maxCount = 0; // 更多出现的字母的次数
  for (let right = 0; right < answerKey.length; right++) {
    const cur = answerKey[right];
    map.set(cur, (map.get(cur) || 0) + 1);
    maxCount = Math.max(maxCount, map.get(cur));
    while (right - left + 1 - maxCount > k) { // 窗口的长度 - 最多出现的字母数
      map.set(answerKey[left], map.get(answerKey[left]) - 1);
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

console.log(maxConsecutiveAnswers('TTFF', 2)); // 4
console.log(maxConsecutiveAnswers('TFFT', 1)); // 3
console.log(maxConsecutiveAnswers('TTFTTFTT', 1)); // 5
console.log(maxConsecutiveAnswers('TTFTTTTTFT', 1)); // 8
console.log(maxConsecutiveAnswers('TFTFTFTF', 2)); // 5
console.log(maxConsecutiveAnswers('TTTFFFFT', 3)); // 7
