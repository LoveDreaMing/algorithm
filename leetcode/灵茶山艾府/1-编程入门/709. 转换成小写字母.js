/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  return s.toLocaleLowerCase();
};

// 大写字母A-Z是'A' = 65，'Z' = 90，小写字母a-z是'a' = 97，'z' = 122，小写字母 = 大写字母 + 32
var toLowerCase = function (s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    if (code >= 65 && code <=90) {
      res += String.fromCharCode(code + 32);
    } else {
      res += s[i];
    }
  }
  return res;
};

console.log(toLowerCase('Hello'));
console.log(toLowerCase('here'));
console.log(toLowerCase('LOVELY'));
