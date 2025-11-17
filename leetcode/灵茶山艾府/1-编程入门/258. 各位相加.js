/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) return num;
  function add(num) {
    const str = String(num);
    let res = 0;
    for (let i = 0; i < str.length; i++) {
      res += Number(str[i]);
    }
    if (res > 9) {
      res = add(res);
    }
    return res;
  }
  return add(num);
};

var addDigits = function (num) {
  if (num < 10) return num;
  function add(num) {
    let res = 0;
    while (num > 0) {
      const rem = num % 10;
      res += rem;
      num = Math.floor(num / 10);
    }
    if (res > 9) {
      res = add(res);
    }
    return res;
  }
  return add(num);
};

console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0
console.log(addDigits(19)); // 1
