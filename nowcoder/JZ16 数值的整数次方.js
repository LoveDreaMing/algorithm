function Power(base, exponent) {
    function pow(base, exponent) {
        if (exponent === 0) return 1;
        if (exponent === 1) return base;
        const result = pow(base, Math.floor(exponent / 2));
        if (exponent % 2 === 0) {
            return result * result;
        } else {
            return result * result * base;
        }
    }
    // write code here
    let isNegative = false; // 是否是负数
    if (exponent < 0) {
        exponent = -exponent;
        isNegative = true;
    }
    const result = pow(base, exponent);
    return isNegative ? 1 / result : result;
}

console.log(Power(2, 3));
// module.exports = {
//     Power: Power
// };
