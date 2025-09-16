function cutRope(number) {
    // write code here
    if (number < 4) return number - 1;
    let times3 = Math.floor(number / 3); // 3的指数倍
    if (number - 3 * times3 === 1) {
        times3--;
    }
    const times2 = Math.floor((number - 3 * times3) / 2); // 2的指数倍
    return Math.pow(3, times3) * Math.pow(2, times2);
}

module.exports = {
    cutRope: cutRope
};
