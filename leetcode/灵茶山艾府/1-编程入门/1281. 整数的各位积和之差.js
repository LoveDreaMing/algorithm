/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let sum = 0,
    pro = 1;
  while (n > 0) {
    const rem = n % 10;
    sum += rem;
    pro *= rem;
    n = Math.floor(n / 10);
  }
  return pro - sum;
};

console.log(subtractProductAndSum(234)); // 15
console.log(subtractProductAndSum(4421)); // 21
