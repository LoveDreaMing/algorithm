/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  let res = 0;
  for (let i = left; i <= right; i++) {
    const code = words[i];
    const first = code.at(0),
      last = code.at(-1);
    if (vowel.includes(first) && vowel.includes(last)) {
      res++;
    }
  }
  return res;
};

console.log(vowelStrings(['are', 'amy', 'u'], 0, 2)); // 2
console.log(vowelStrings(['hey', 'aeo', 'mu', 'ooo', 'artro'], 1, 4)); // 3
